/**
 * Name: RdfInstanceRepository
 * Description: Where all of the rdf and error marker data will be stored
 */

import { injectable, inject } from 'inversify'
import type monaco from 'monaco-editor'
import { HierarchyClass, HierarchyResponseSchema } from './Types'
import { z } from 'zod'
import { getAndCheckValidation } from '../helpers'
import { makeObservable, observable, action, runInAction } from 'mobx'
import { Types } from '../Core/Types'
import { HttpGateway } from '../Core/HttpGateway'
import { Quad } from '@rdfjs/types'

const getAndCheckHierarchyResponse = (data: unknown): z.infer<typeof HierarchyResponseSchema> =>
  getAndCheckValidation<z.infer<typeof HierarchyResponseSchema>>(data, HierarchyResponseSchema)

@injectable()
export class RdfInstanceRepository {
  public dataGateway

  //TODO: split out hierarchy logic into its own Repository?
  hierarchyPm: Record<string, HierarchyClass> | null = null
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
      hierarchyPm: observable,
      rdf: observable,
      selectedRelationship: observable,
      relationships: observable,
      markers: observable,
      nodes: observable,
      loadHierarchy: action,
      addPrefix: action,
      reset: action
    })
    this.reset()
  }

  reset = () => {
    this.hierarchyPm = {}
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

  async loadHierarchy() {
    // load hierarchy
    const query = `SELECT ?sub ?super ?subType ?subComment ?subLabel 
        WHERE                                                      
        {                                                          
           ?sub rdfs:subClassOf ?super .                          
            OPTIONAL {?sub rdf:type ?subType }                     
            OPTIONAL {?sub rdfs:label ?subLabel}                   
            OPTIONAL {?sub rdfs:comment ?subComment}               
        }`;

    try {
      const statements = await this.dataGateway.get<z.infer<typeof HierarchyResponseSchema>>(query, getAndCheckHierarchyResponse)
      const getOrCreateHierarchy = (
        hierarchy: Record<string, HierarchyClass>,
        key: string
      ) => {
        if (!(key in hierarchy)) {
          hierarchy[key] = {
            subClasses: [],
            types: [],
            comments: [],
            labels: [],
            keys: [],
          };
        }
        return hierarchy[key];
      };

      const response = statements.reduce(
        (acc: Record<string, HierarchyClass>, item) => {
          const hierarchy = { ...acc };

          const sub = getOrCreateHierarchy(hierarchy, item.sub.value);
          const superObj = getOrCreateHierarchy(hierarchy, item.super.value);

          if (!superObj.subClasses.includes(item.sub.value))
            superObj.subClasses.push(item.sub.value);
          if (item.subType && !sub.types.includes(item.subType.value))
            sub.types.push(item.subType.value);
          if (item.subComment && !sub.comments.includes(item.subComment.value))
            sub.comments.push(item.subComment.value);
          if (item.subLabel && !sub.labels.includes(item.subLabel.value))
            sub.labels.push(item.subLabel.value);

          return hierarchy;
        },
        {} as Record<string, HierarchyClass>
      );

      runInAction(() => {
        this.hierarchyPm = response
      })
    } catch (err) {
      console.error(err);

    }
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
