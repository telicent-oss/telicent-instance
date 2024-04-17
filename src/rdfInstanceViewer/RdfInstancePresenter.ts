import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import rdfParser from 'rdf-parse'
import { action, computed, makeObservable, runInAction } from "mobx";
import { MarkerSeverity } from 'monaco-editor'
import { Readable } from 'readable-stream'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { Edge, MarkerType, Node } from "reactflow";

interface QuadError extends Error {
  context: {
    line: number;
    previousToken?: {
      start: number;
      end: number;
      line: number;
    };
  };
}

const getWordAfterLastHash = (s: string) => {
  const regex: RegExp = /[^#]+$/
  const matches: RegExpMatchArray | null = s.match(regex)

  return matches ? matches[0].trim() : s
}

const getCapitalLetters = (s: string) => {
  const regex: RegExp = /[A-Z]/g
  const matches: RegExpMatchArray | null = s.match(regex)

  return matches ? matches.join('') : s
}

const pascalToKebab = (pascalString: string): string => {
  return pascalString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

@injectable()
export class RdfInstancePresenter {
  @inject(RdfInstanceRepository)
  rdfInstanceRepository!: RdfInstanceRepository

  constructor() {
    makeObservable(this, {
      load: action,
      handleRdfInput: action,
      viewModel: computed,
      removeEdgeFromRdf: action
    })
  }

  formatNode = (node: Quad): Node => {
    return {
      type: 'classInstanceNode',
      id: node.subject.value,
      position: { x: 0, y: 0 },
      data: {
        name: node.object.value,
        shortName: getCapitalLetters(getWordAfterLastHash(node.object.value)),
        className: pascalToKebab(getWordAfterLastHash(node.object.value))
      }
    }
  }

  formatEdge = (edge: Quad): Edge => ({
    id: `${edge.object.value}-${edge.subject.value}`,
    source: edge.object.value,
    target: edge.subject.value,
    type: "relationshipEdge",
    label: this.rdfInstanceRepository.getUserFriendlyURI(edge.predicate.value),
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  })

  get viewModel() {
    const hierarchy = JSON.parse(JSON.stringify(this.rdfInstanceRepository.hierarchyPm))
    return {
      hierarchy,
      hasHierarchy: Object.keys(hierarchy).length > 0,
      rdf: this.rdfInstanceRepository.rdf,
      markers: this.rdfInstanceRepository.markers.map((marker) => {
        return marker
      }),
      nodes: this.rdfInstanceRepository.nodes.map(this.formatNode),
      edges: this.rdfInstanceRepository.edges.map(this.formatEdge),
      iesObjects: this.rdfInstanceRepository.iesObjects.map((iesObject) => iesObject),
      prefixes: this.rdfInstanceRepository.prefixes
    }
  }

  load = () => {
    this.rdfInstanceRepository.loadHierarchy()
  }

  removeEdgeFromRdf = (input: Array<string>, source: string, target: string) => {
    this.rdfInstanceRepository.rdf = input.filter((i) => !(i.includes(source) && i.includes(target))).join()
  }

  handleRdfInput = (rdfInput?: string) => {
    if (!rdfInput) return
    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([rdfInput])
    const quads: Array<Quad> = []
    const nodeQuads: Array<Quad> = []
    const edgeQuads: Array<Quad> = []
    const iesObjectQuads: Array<Quad> = []

    rdfParser.parse(input, { contentType: "text/turtle" }).on("prefix", (prefix, namespace) => {
      // TODO: check existing prefixes
      // if doesn't exist add it - done
      // have a feeling that this will cause problems when
      // trying to remove prefixes
      const existingPrefixes = Object.keys(this.viewModel.prefixes)

      // Add prefix
      if (!existingPrefixes.includes(`${prefix}:`)) {
        this.rdfInstanceRepository.addPrefix(prefix, namespace.value)
      }
    }).on("data", (triple) => {
      quads.push(triple)
      // Set objects
      if (triple.object.termType === "Literal") {
        iesObjectQuads.push(triple);
        return;
      }

      // Set Edges
      if (Object.values(this.rdfInstanceRepository.relationships).includes(triple.predicate.value)) {
        edgeQuads.push(triple);
        return
      }

      // Set Nodes
      nodeQuads.push(triple);
    }).on("end", () => {
      runInAction(() => {
        this.rdfInstanceRepository.nodes = [...nodeQuads]
        this.rdfInstanceRepository.edges = [...edgeQuads]
        this.rdfInstanceRepository.iesObjects = [...iesObjectQuads]
        this.rdfInstanceRepository.loadPrefixes()

        quads.forEach(quad => {
          if (quad.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
            this.rdfInstanceRepository.rdf += `${this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)} a ${this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value)} .\n`
            return
          }
          this.rdfInstanceRepository.rdf += `${this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)} ${this.rdfInstanceRepository.getUserFriendlyURI(quad.predicate.value)} ${this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value)} .\n`
        });
      })
    }).on("error", (err: QuadError) => {
      //      console.log({ err })
      runInAction(() => {

        this.rdfInstanceRepository.markers.push({
          startColumn: err?.context.previousToken?.start ?? 0,
          endColumn: err?.context.previousToken?.end ?? 0,
          startLineNumber: err?.context.line,
          endLineNumber: err?.context.line,
          message: err.message,
          severity: MarkerSeverity.Error
        })
      })
    })
  }
}
