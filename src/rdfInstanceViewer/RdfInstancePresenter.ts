import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import rdfParser from 'rdf-parse'
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { Readable } from 'readable-stream'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { formatEdge, formatNode } from "../helpers";

// MarkerSeverity: Copied from monaco-editor 
// due to import error while testing
export enum MarkerSeverity {
  Hint = 1,
  Info = 2,
  Warning = 4,
  Error = 8
}

export interface QuadError extends Error {
  context: {
    token: {
      type: string;
      value: string;
      prefix: string;
      line: number;
      start: number;
      end: number;
    },
    line: number;
    previousToken?: {
      type: string;
      prefix: string;
      value: string;
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

  newNodeName: string | null = null
  newNodeType: string | null = null

  newEdgeType: string | null = null
  newEdgeSource: string | null = null
  newEdgeTarget: string | null = null

  lastSelectedPrefix: string | null = null

  constructor() {
    makeObservable(this, {
      handleRdfInput: action,
      viewModel: computed,
      addNode: action,
      newNodeType: observable,
      newNodeName: observable,
      newEdgeSource: observable,
      newEdgeTarget: observable,
      newEdgeType: observable,
      resetNewNode: action,
      resetNewEdge: action,
      deleteNodeAndAssociatedEdges: action,
      deleteEdge: action,
      formatRdfText: action,
      reset: action
    })
    this.reset()
  }

  reset() {
    this.resetNewEdge()
    this.resetNewNode()
    this.lastSelectedPrefix = "data:"
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
      relationships: this.rdfInstanceRepository.relationships.map((relationship => this.rdfInstanceRepository.getUserFriendlyURI(relationship))),
      iesObjects: this.rdfInstanceRepository.iesObjects.map((iesObject) => iesObject),
      prefixes: this.rdfInstanceRepository.prefixes,
      lastSelectedPrefix: this.lastSelectedPrefix ?? this.rdfInstanceRepository.prefixes[0]
    }
  }

  addNode = () => {
    // TODO: need id and type
    if (!this.newNodeType || !this.newNodeName) return
    this.rdfInstanceRepository.rdf = `${this.rdfInstanceRepository.rdf}\n${this.newNodeName} a ${this.rdfInstanceRepository.getUserFriendlyURI(this.newNodeType)} .`
    this.handleRdfInput(this.rdfInstanceRepository.rdf)
    this.resetNewNode()
  }

  resetNewNode = () => {
    this.newNodeName = null
    this.newNodeType = null
  }

  resetNewEdge = () => {
    this.newEdgeType = null
    this.newEdgeSource = null
    this.newEdgeTarget = null
  }

  addEdge = () => {
    if (!this.newEdgeType || !this.newEdgeSource || !this.newEdgeTarget) return
    this.rdfInstanceRepository.rdf = `${this.rdfInstanceRepository.rdf}\n${this.rdfInstanceRepository.getUserFriendlyURI(this.newEdgeTarget)} ${this.newEdgeType} ${this.rdfInstanceRepository.getUserFriendlyURI(this.newEdgeSource)} .`
    this.handleRdfInput(this.rdfInstanceRepository.rdf)
    this.resetNewEdge()
  }

  deleteNodeAndAssociatedEdges = (nodeId: string) => {
    if (!this.rdfInstanceRepository.rdf) return

    const readableId = this.rdfInstanceRepository.getUserFriendlyURI(nodeId)
    this.rdfInstanceRepository.rdf = this.rdfInstanceRepository.rdf.split("\n").filter((line) => !line.includes(readableId)).join("\n")
    this.handleRdfInput(this.rdfInstanceRepository.rdf)
  }

  deleteEdge = (source: string, target: string, label: string) => {
    if (!this.rdfInstanceRepository.rdf) return
    const rdf = `${this.rdfInstanceRepository.getUserFriendlyURI(target)} ${label} ${this.rdfInstanceRepository.getUserFriendlyURI(source)} .\n`
    this.rdfInstanceRepository.rdf = this.rdfInstanceRepository.rdf.split("\n").filter((line) =>
      !Boolean(line.trim() === rdf.trim())).join("\n")
    this.handleRdfInput(this.rdfInstanceRepository.rdf)
  }


  onDataPartial = (nodeArr: Array<Quad>, edgeArr: Array<Quad>, objectArr: Array<Quad>, quadArray: Array<Quad>) => (triple: Quad) => {
    quadArray.push(triple)
    // Set objects
    if (triple.object.termType === "Literal") {
      objectArr.push(triple);
      return;
    }

    // Set Edges
    if (this.rdfInstanceRepository.relationships.includes(triple.predicate.value)) {
      edgeArr.push(triple);
      return
    }

    // Set Nodes
    nodeArr.push(triple);
  }


  formatRdfText = (quads: Array<Quad>) => {
    quads.forEach(quad => {
      if (quad.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
        this.rdfInstanceRepository.rdf += `${this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)} a ${this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value)} .\n`
        return
      }
      this.rdfInstanceRepository.rdf += `${this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)} ${this.rdfInstanceRepository.getUserFriendlyURI(quad.predicate.value)} ${this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value)} .\n`
    });
  }

  onEndPartial = (nodes: Array<Quad>, edges: Array<Quad>, objects: Array<Quad>, quads: Array<Quad>) => () => {
    runInAction(() => {
      this.rdfInstanceRepository.nodes = [...nodes]
      this.rdfInstanceRepository.edges = [...edges]
      this.rdfInstanceRepository.iesObjects = [...objects]
      this.rdfInstanceRepository.loadPrefixes()
      this.formatRdfText(quads)
    })
  }

  onError = (err: QuadError) => {
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
  }

  handleRdfInput = (rdfInput?: string) => {
    if (!rdfInput) return
    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([rdfInput])
    const quads: Array<Quad> = []
    const nodeQuads: Array<Quad> = []
    const edgeQuads: Array<Quad> = []
    const iesObjectQuads: Array<Quad> = []

    const onData = this.onDataPartial(nodeQuads, edgeQuads, iesObjectQuads, quads)
    const onEnd = this.onEndPartial(nodeQuads, edgeQuads, iesObjectQuads, quads)

    rdfParser.parse(input, { contentType: "text/turtle" }).on("prefix", (prefix, namespace) => {
      // TODO: check existing prefixes
      // if doesn't exist add it - done
      // have a feeling that this will cause problems when
      // trying to remove prefixes

      // Add prefix
      if (!Object.keys(this.viewModel.prefixes).includes(`${prefix}:`) || this.viewModel.prefixes[`${prefix}:`] !== namespace) {
        this.rdfInstanceRepository.addPrefix(prefix, namespace.value)
      }
    }).on("data", onData)
      .on("end", onEnd)
      .on("error", this.onError)
  }
}
