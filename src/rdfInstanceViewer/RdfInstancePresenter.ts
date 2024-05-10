import { inject, injectable } from "inversify";
import { Quad } from '@rdfjs/types'
import { Parser, Prefixes, Writer, DataFactory, Store } from "n3";
import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { Readable } from 'readable-stream'
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { formatDataTypeProperty, formatEdge, formatNode, isNode, isDataTypeProperty, isObjectProperty, connectNodesWithReactFlowId, rebuildLongUri } from "../helpers";
import getLayoutNodes from "../Components/Diagram/Layout";
import { Edge } from "reactflow";

const { namedNode, literal, quad: quadFn } = DataFactory

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

  selectedNode: string | null = null

  lastSelectedPrefix: string | null = null
  lastSelectedLiteral: string | null = null
  constructor() {
    makeObservable(this, {
      handleRdfInput: action,
      viewModel: computed,
      diagram: computed,
      addNode: action,
      newNodeType: observable,
      newNodeName: observable,
      resetNewNode: action,
      resetNewEdge: action,
      deleteNode: action,
      deleteEdges: action,
      formatRdfText: action,
      addChangedPrefixes: action,
      reset: action,
    })
    this.reset()
  }

  reset() {
    this.resetNewEdge()
    this.resetNewNode()
    this.lastSelectedPrefix = "data"
    this.lastSelectedLiteral = "ies:representationValue"
    this.selectedNode = null
  }

  get diagram() {
    // get nodes and edges (already formatted) then run them through the dagre layout then add them to the respective nodes
    const n = this.rdfInstanceRepository.nodes.map(formatNode)
    const objectProperties = this.rdfInstanceRepository.objectProperties.map(formatEdge)
    const dataTypeProperties = this.rdfInstanceRepository.dataTypeProperties.map(formatDataTypeProperty)

    const edgesWithNoLayout = connectNodesWithReactFlowId(n, objectProperties, dataTypeProperties).map(edge => ({
      ...edge,
      label: this.rdfInstanceRepository.getUserFriendlyURI(edge.label!.toString())
    }))

    const { nodes, edges } = getLayoutNodes([...n, ...dataTypeProperties], edgesWithNoLayout)

    return {
      nodes,
      edges
    }
  }

  get viewModel() {
    return {
      markers: this.rdfInstanceRepository.markers.map((marker) => {
        return marker
      }),
      relationships: this.rdfInstanceRepository.relationships.map((relationship => this.rdfInstanceRepository.getUserFriendlyURI(relationship))),
      prefixes: this.rdfInstanceRepository.prefixes,
      dataTypes: this.rdfInstanceRepository.literals,
      lastSelectedPrefix: this.lastSelectedPrefix ?? this.rdfInstanceRepository.prefixes[0],
      lastSelectedLiteral: this.lastSelectedLiteral ?? this.rdfInstanceRepository.literals[0]
    }
  }

  addNode = () => {
    if (!this.newNodeType || !this.newNodeName) {
      console.warn("cancelling creation of node, missing name or type")
      return
    }
    const rdf = `${this.rdfInstanceRepository.rdf}\n${this.newNodeName} a ${this.rdfInstanceRepository.getUserFriendlyURI(this.newNodeType)} .`
    this.handleRdfInput(rdf)
    this.resetNewNode()
  }

  addLiteral = (edgeType: string, attributeValue: string) => {
    if (this.selectedNode === null) {
      console.warn("Cannot add a literal without a source node")
      return
    }
    // createLiteral quad
    const rdf = `${this.rdfInstanceRepository.rdf}\n${this.rdfInstanceRepository.getUserFriendlyURI(this.selectedNode)} ${edgeType} "${attributeValue}" .`
    this.handleRdfInput(rdf)
    this.selectedNode = null
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
    // Because nodes have random id's we have to find the data id to generate valid rdf
    const sourceNode = this.diagram.nodes.find(n => n.id === this.newEdgeSource)
    const targetNode = this.diagram.nodes.find(n => n.id === this.newEdgeTarget)
    if (!sourceNode || !targetNode) {
      console.warn("Unable to find connecting nodes")
      return
    }
    const rdf = `${this.rdfInstanceRepository.convertPrefixesToRdf()}${this.rdfInstanceRepository.rdf}\n${this.rdfInstanceRepository.getUserFriendlyURI(sourceNode.data.id)} ${this.newEdgeType} ${this.rdfInstanceRepository.getUserFriendlyURI(targetNode.data.id)} .`
    this.handleRdfInput(rdf)
    this.resetNewEdge()
  }

  deleteNode = async (nodeId: string) => {

    if (!this.rdfInstanceRepository.rdf) return

    const node = this.diagram.nodes.find(n => n.id === nodeId)
    if (!node) {
      console.warn("cannot find node to delete")
      return
    }
    const nodesToRemove = this.rdfInstanceRepository.nodes.filter(n => n.subject.value === node.data.id)
    const dataTypesToRemove = this.rdfInstanceRepository.dataTypeProperties.filter(n => n.subject.value === node.data.id)
    const quadsToRemove = nodesToRemove.concat(dataTypesToRemove)
    if (quadsToRemove.length === 0) {
      console.warn("cannot find node to delete")
      return
    }


    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([this.rdfInstanceRepository.rdf])

    const parser = new Parser({ format: 'Turtle' })

    parser.parse(input, (error, quad, prefixes) => {
      if (error) {
        this.onError(error as QuadError)
        return
      }
      if (quad) {
        quadsToRemove.forEach(quadToRemove => {
          if (quadToRemove.equals(quad)) {
            this.rdfInstanceRepository.store.removeQuad(quad.subject, quad.predicate, quad.object)
          }
        })
      } else {
        runInAction(() => {
          this.rdfInstanceRepository.nodes = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isNode)
          this.rdfInstanceRepository.objectProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isObjectProperty)
          this.rdfInstanceRepository.dataTypeProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isDataTypeProperty)
          if (prefixes) {
            this.addChangedPrefixes(prefixes)
          }
          this.formatRdfText(this.rdfInstanceRepository.store.getQuads(null, null, null, null), this.rdfInstanceRepository.prefixes)
        })

      }
    })
  }

  deleteEdges = (edges: Array<Edge>) => {
    if (!this.rdfInstanceRepository.rdf) {
      // Should never hit here as prefixes are loaded
      // to rdf on mount
      console.warn("No rdf, cancelling delete")
      return
    }
    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([this.rdfInstanceRepository.rdf])

    const parser = new Parser({ format: 'Turtle' })

    parser.parse(input, (error, quad, prefixes) => {
      if (error) {
        this.onError(error as QuadError)
        return
      }
      if (quad) {
        edges.forEach((edge => {
          const [source, target] = edge.id.split("--")
          const expandedUri = rebuildLongUri(this.rdfInstanceRepository.prefixes, edge.label!.toString())
          const quadToRemove = quadFn(
            namedNode(source),
            namedNode(expandedUri),
            namedNode(target)
          )
          if (quadToRemove.equals(quad)) {
            this.rdfInstanceRepository.store.removeQuad(quad)
          }
        }))
      } else {
        runInAction(() => {
          this.rdfInstanceRepository.nodes = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isNode)
          this.rdfInstanceRepository.objectProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isObjectProperty)
          this.rdfInstanceRepository.dataTypeProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isDataTypeProperty)
          if (prefixes) {
            this.addChangedPrefixes(prefixes)
          }
          this.formatRdfText(this.rdfInstanceRepository.store.getQuads(null, null, null, null), this.rdfInstanceRepository.prefixes)
        })

      }
    })


    this.formatRdfText(this.rdfInstanceRepository.store.getQuads(null, null, null, null), this.rdfInstanceRepository.prefixes)
  }

  onError = (err: QuadError) => {
    runInAction(() => {
      this.rdfInstanceRepository.markers = [{
        startColumn: err.context.previousToken?.start ?? 0,
        endColumn: err.context.previousToken?.end ?? 0,
        startLineNumber: err.context.line,
        endLineNumber: err.context.line,
        message: err.message,
        severity: MarkerSeverity.Error
      }]
    })
  }

  addChangedPrefixes = (prefixes: Prefixes) => {
    for (let prefix in prefixes) {
      // add if doesn't exist
      const prefixWithColon = `${prefix}:`

      if (this.rdfInstanceRepository.prefixes[prefixWithColon] === undefined) {
        this.rdfInstanceRepository.addPrefix(prefix, prefixes[prefix].toString())
      }

      // overwrite if prefix exists but has a different value
      else if (this.rdfInstanceRepository.prefixes && this.rdfInstanceRepository.prefixes[prefixWithColon].value !== prefixes[prefix].value) {
        this.rdfInstanceRepository.addPrefix(prefix, prefixes[prefix].toString())
      }
    }
    this.rdfInstanceRepository.loadPrefixes()
  }


  handleRdfInput = (rdfInput: string | undefined) => {
    this.rdfInstanceRepository.store = new Store()
    if (!rdfInput) return null
    // @ts-expect-error From does not exist on type Readable when it actually does
    const input = Readable.from([rdfInput])

    const parser = new Parser({ format: 'Turtle' })

    parser.parse(input, (error, quad, prefixes) => {
      if (error) {
        this.onError(error as QuadError)
        return
      }
      if (quad) {
        this.rdfInstanceRepository.store.addQuad(quad.subject, quad.predicate, quad.object)
      } else {
        runInAction(() => {
          this.rdfInstanceRepository.nodes = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isNode)
          this.rdfInstanceRepository.objectProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isObjectProperty)
          this.rdfInstanceRepository.dataTypeProperties = this.rdfInstanceRepository.store.getQuads(null, null, null, null).filter(isDataTypeProperty)
          if (prefixes) {
            this.addChangedPrefixes(prefixes)
          }
        })
        this.formatRdfText(this.rdfInstanceRepository.store.getQuads(null, null, null, null), this.rdfInstanceRepository.prefixes)
      }
    })
  }

  formatRdfText = (quads: Array<Quad>, prefixes: Prefixes) => {
    const writer = new Writer({ prefixes });
    quads.forEach((quad) => {
      if (isDataTypeProperty(quad)) {
        writer.addQuad(
          namedNode(this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)), namedNode(quad.predicate.value), literal(this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value))
        )
      } else {
        writer.addQuad(
          namedNode(this.rdfInstanceRepository.getUserFriendlyURI(quad.subject.value)), namedNode(this.rdfInstanceRepository.getUserFriendlyURI(quad.predicate.value)), namedNode(this.rdfInstanceRepository.getUserFriendlyURI(quad.object.value))
        )
      }
    })
    writer.end((_, result) => {
      this.rdfInstanceRepository.rdf = result
    });
  }
}
