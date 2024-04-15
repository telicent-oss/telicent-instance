import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import rdfParser from 'rdf-parse'
import { action, computed, makeObservable, runInAction } from "mobx";
import { MarkerSeverity } from 'monaco-editor'
import { Readable } from 'readable-stream'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { Node } from "reactflow";

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

const formatNode = (node: Quad): Node => {
  console.log({ node })
  return {
    type: node.object.value,
    id: node.subject.value,
    position: { x: 0, y: 0 },
    data: {
      value: node.object.value
    }
  }
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
      nodes: computed,
      removeEdgeFromRdf: action
    })
  }

  get viewModel() {
    const hierarchy = JSON.parse(JSON.stringify(this.rdfInstanceRepository.hierarchyPm))
    return {
      hierarchy,
      hasHierarchy: Object.keys(hierarchy).length > 0,
      rdf: this.rdfInstanceRepository.rdf,
      markers: this.rdfInstanceRepository.markers.map((marker) => {
        return marker
      }),
      nodes: this.rdfInstanceRepository.nodes.map(formatNode),
      edges: this.rdfInstanceRepository.edges.map((edge) => edge),
      iesObjects: this.rdfInstanceRepository.iesObjects.map((iesObject) => iesObject),
      prefixes: this.rdfInstanceRepository.prefixes
    }
  }

  get nodes() {
    return this.rdfInstanceRepository.nodes.map(formatNode)
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
    const nodeQuads: Array<Quad> = []
    const edgeQuads: Array<Quad> = []
    const iesObjectQuads: Array<Quad> = []

    rdfParser.parse(input, { contentType: "text/turtle" }).on("prefix", (prefix, namespace) => {
      // TODO: check existing prefixes
      // if doesn't exist add it
      // have a feeling that this will cause problems when
      // trying to remove prefixes
      const existingPrefixes = Object.keys(this.viewModel.prefixes)
      if (!existingPrefixes.includes(prefix)) {
        this.rdfInstanceRepository.addPrefix(prefix, namespace)
      }

    }).on("data", (triple) => {
      if (triple.object.termType === "Literal") {
        iesObjectQuads.push(triple);
        return;
      }

      if (Object.values(this.rdfInstanceRepository.relationships).includes(triple.predicate.value)) {
        edgeQuads.push(triple);
        return
      }

      nodeQuads.push(triple);
    }).on("end", () => {
      runInAction(() => {
        this.rdfInstanceRepository.nodes = [...nodeQuads]
        this.rdfInstanceRepository.edges = [...edgeQuads]
        this.rdfInstanceRepository.iesObjects = [...iesObjectQuads]
      })
    }).on("error", (err: QuadError) => {
      console.log({ err })
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
