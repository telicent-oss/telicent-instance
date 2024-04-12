import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import rdfParser from 'rdf-parse'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { action, computed, makeObservable, runInAction } from "mobx";
import { MarkerSeverity } from 'monaco-editor'
import { Readable } from 'readable-stream'

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
      load: action,
      handleRdfInput: action,
      viewModel: computed,
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
      nodes: this.rdfInstanceRepository.nodes.map((node) => node),
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
    console.log(rdfInput)
    if (!rdfInput) return
    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([rdfInput])
    const nodeQuads: Array<Quad> = []
    const edgeQuads: Array<Quad> = []
    const textQuads: Array<Quad> = []

    rdfParser.parse(input, { contentType: "text/turtle" }).on("prefix", (prefix, namespace) => {
      console.log(prefix, namespace)
      // TODO: check existing prefixes
      // if doesn't exist add it
      // have a feeling that this will cause problems when
      // trying to remove prefixes
      console.log(this.viewModel.prefixes)
      const existingPrefixes = Object.keys(this.viewModel.prefixes)
      if (!existingPrefixes.includes(prefix)) {
        this.rdfInstanceRepository.addPrefix(prefix, namespace)
      }

    }).on("data", (triple) => {
      console.log("data")
      if (triple.object.termType === "Literal") {
        textQuads.push(triple);
        return;
      }

      if (Object.values(this.rdfInstanceRepository.relationships).includes(triple.predicate.value)) {
        edgeQuads.push(triple);
        return
      }

      nodeQuads.push(triple);
    }).on("end", () => {
      console.log("ending")
      const stagedNodes = nodeQuads.map((triple) => {
        console.log({ triple });

        const value = triple.object.value;
        console.log({ value });

      })

      runInAction(() => {
        this.rdfInstanceRepository.nodes = [...stagedNodes]
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
