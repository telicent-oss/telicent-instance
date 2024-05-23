/**
 * Name: RdfInstanceRepository
 * Description: Where all of the rdf and error marker data will be stored
 */

import { z } from "zod";
import { injectable, inject } from 'inversify'
import type monaco from 'monaco-editor'
import { makeObservable, observable, action, runInAction } from 'mobx'
import { Types } from '../Core/Types'
import { HttpGateway } from '../Core/HttpGateway'
import { Quad } from '@rdfjs/types'
import { Prefixes, DataFactory, Store } from 'n3'
import { DATATYPE_PROPERTY_QUERY, OBJECT_PROPERTY_QUERY } from '../constants'
import { DataTypeResponseSchema, ObjectPropertyResponseSchema } from "./Types";
import { getAndCheckValidation } from "../helpers";

export const getAndCheckDataTypeResponse = (data: unknown): z.infer<typeof DataTypeResponseSchema> =>
  getAndCheckValidation<z.infer<typeof DataTypeResponseSchema>>(data, DataTypeResponseSchema)

export const getAndCheckObjectPropertyResponse = (data: unknown): z.infer<typeof ObjectPropertyResponseSchema> =>
  getAndCheckValidation<z.infer<typeof ObjectPropertyResponseSchema>>(data, ObjectPropertyResponseSchema)

const { namedNode } = DataFactory

@injectable()
export class RdfInstanceRepository {
  public dataGateway

  //TODO: split out hierarchy logic into its own Repository?
  rdf: string | null = null
  store = new Store()
  prefixes: Prefixes = {}
  literals: Array<string> = []
  relationships: Array<string> = []
  selectedRelationship: string | null = null
  markers: Array<monaco.editor.IMarkerData> = []
  nodes: Array<Quad> = []
  objectProperties: Array<Quad> = []
  dataTypeProperties: Array<Quad> = []


  constructor(@inject(Types.IDataGateway) dataGateway: HttpGateway) {
    this.dataGateway = dataGateway
    makeObservable(this, {
      rdf: observable,
      selectedRelationship: observable,
      relationships: observable,
      literals: observable,
      markers: observable,
      nodes: observable.deep,
      store: observable.deep,
      objectProperties: observable.deep,
      dataTypeProperties: observable.deep,
      addPrefix: action,
      loadDataTypes: action,
      loadPrefixes: action,
      loadObjectProperties: action,
      reset: action
    })
    this.reset()
  }

  reset = () => {
    this.addPrefix("data", "http://example.com/rdf/testdata#")
    this.addPrefix("ies", "http://ies.data.gov.uk/ontology/ies4#")
    this.prefixes = this.loadPrefixes()
    this.loadObjectProperties()
    this.loadDataTypes()
    this.markers = []
    this.selectedRelationship = this.relationships[0]
    this.rdf = this.convertPrefixesToRdf()
  }

  convertPrefixesToRdf = () => Object.entries(this.prefixes).map(([key, namespace]) => `@prefix ${key}: <${namespace.value}>.\n`).join("")

  loadPrefixes() {
    const prefixes = Object.entries(this.dataGateway.getPrefixes()).reduce((prefixes, prefix) => {
      const [key, value] = prefix
      // strip colon because n3 Prefix already understands this
      prefixes[key.replace(":", "")] = namedNode(value)
      return prefixes
    }, {} as Prefixes)

    return prefixes
  }

  async loadDataTypes() {
    try {
      const statements = await this.dataGateway.get<z.infer<typeof DataTypeResponseSchema>>(DATATYPE_PROPERTY_QUERY, getAndCheckDataTypeResponse)
      runInAction(() => {

        this.literals = statements.map(statement => this.getUserFriendlyURI(statement.data_type_property.value))
      })
    } catch (err) {
      throw err
    }
  }

  loadObjectProperties = async () => {
    try {
      const statements = await this.dataGateway.get<z.infer<typeof ObjectPropertyResponseSchema>>(OBJECT_PROPERTY_QUERY, getAndCheckObjectPropertyResponse)
      runInAction(() => {

        this.relationships = statements.map(statement => this.getUserFriendlyURI(statement.object_property.value))
      })
    } catch (err) {
      throw err
    }
  }
  addPrefix(prefix: string, namespace: string) {
    this.dataGateway.addPrefix(`${prefix}:`, namespace)
  }

  getUserFriendlyURI(s: string) {
    return this.dataGateway.getUserFriendlyURI(s)
  }
}
