/**
 * Name: RdfInstanceRepository
 * Description: Where all of the rdf and error marker data will be stored
 */

import { injectable, inject } from 'inversify'
import type monaco from 'monaco-editor'
import { makeObservable, observable, action, runInAction } from 'mobx'
import { Types } from '../Core/Types'
import { HttpGateway } from '../Core/HttpGateway'
import { Quad } from '@rdfjs/types'


@injectable()
export class RdfInstanceRepository {
  public dataGateway

  //TODO: split out hierarchy logic into its own Repository?
  rdf: string | null = null
  prefixes: Record<string, string> = {}
  relationships: Array<string> = []
  selectedRelationship: string | null = null
  markers: Array<monaco.editor.IMarkerData> = []
  nodes: Array<Quad> = []
  edges: Array<Quad> = []
  iesObjects: Array<Quad> = []


  constructor(@inject(Types.IDataGateway) dataGateway: HttpGateway) {
    this.dataGateway = dataGateway
    makeObservable(this, {
      rdf: observable,
      selectedRelationship: observable,
      relationships: observable,
      markers: observable,
      nodes: observable,
      addPrefix: action,
      reset: action
    })
    this.reset()
  }

  reset = () => {
    this.rdf = ""
    this.relationships = [
      "http://ies.data.gov.uk/ontology/ies4#aCopyOf",
      "http://ies.data.gov.uk/ontology/ies4#relationship",
      "http://ies.data.gov.uk/ontology/ies4#isParticipantIn",
      "http://ies.data.gov.uk/ontology/ies4#isParticipationOf",
      "http://ies.data.gov.uk/ontology/ies4#EventParticipant",
      "http://ies.data.gov.uk/ontology/ies4#isStateOf",
      "http://ies.data.gov.uk/ontology/ies4#isPartOf",
      "http://ies.data.gov.uk/ontology/ies4#PeriodOfTime",
      "http://ies.data.gov.uk/ontology/ies4#ClassOfElement",
      "http://ies.data.gov.uk/ontology/ies4#Element",
      "http://ies.data.gov.uk/ontology/ies4#State",
      "http://ies.data.gov.uk/ontology/ies4#attribute",
      "http://ies.data.gov.uk/ontology/ies4#Event",
      "http://ies.data.gov.uk/ontology/ies4#ExchangedItem",
      "http://ies.data.gov.uk/ontology/ies4#Entity"
    ]
    this.markers = []
    this.nodes = []
    // TODO: set this up properly later
    this.selectedRelationship = this.relationships[0]
    this.addPrefix("data", "http://example.com/rdf/testdata#")
    this.loadPrefixes()
  }

  removeEdgeFromRdf = (input: Array<string>, source: string, target: string) => {
    this.rdf = input.filter((i) => !(i.includes(source) && i.includes(target))).join()
  }

  addEdgeToRdf = (source: string, target: string) => {
    const previous = this.rdf
    if (!this.selectedRelationship) {
      console.warn("Invalid selected relationship")
      return
    }
    this.rdf = `${previous}\n${this.getUserFriendlyURI(source)} ${this.getUserFriendlyURI(this.selectedRelationship)} ${this.getUserFriendlyURI(target)} .`
  }

  loadPrefixes() {
    const prefixes = this.dataGateway.getPrefixes()
    let rdfPrefix = "";

    for (const key in prefixes) {
      rdfPrefix += `@prefix ${key} <${prefixes[key]}> .\n`
    }

    runInAction(() => {
      this.prefixes = prefixes
      this.rdf = `${rdfPrefix}\n`
    })
  }

  addPrefix(prefix: string, namespace: string) {
    this.dataGateway.addPrefix(`${prefix}:`, namespace)
  }

  getUserFriendlyURI(s: string) {
    return this.dataGateway.getUserFriendlyURI(s)
  }
}
