import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import rdfParser from 'rdf-parse'
import { action, computed, makeObservable, runInAction } from "mobx";
import { MarkerSeverity } from 'monaco-editor'
import { Readable } from 'readable-stream'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { formatEdge, formatNode } from "../helpers";

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

@injectable()
export class RdfInstancePresenter {
  @inject(RdfInstanceRepository)
  rdfInstanceRepository!: RdfInstanceRepository

  constructor() {
    makeObservable(this, {
      handleRdfInput: action,
      viewModel: computed,
    })
  }

  get viewModel() {
    return {
      rdf: this.rdfInstanceRepository.rdf,
      markers: this.rdfInstanceRepository.markers.map((marker) => {
        return marker
      }),
      nodes: this.rdfInstanceRepository.nodes.map(formatNode),
      edges: this.rdfInstanceRepository.edges.map((e) => {
        const label = this.rdfInstanceRepository.getUserFriendlyURI(e.predicate.value)
        return formatEdge(e, label)
      }),
      iesObjects: this.rdfInstanceRepository.iesObjects.map((iesObject) => iesObject),
      prefixes: this.rdfInstanceRepository.prefixes
    }
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
