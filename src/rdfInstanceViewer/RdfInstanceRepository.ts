import { injectable, inject } from 'inversify'
import { HierarchyClass, HierarchyResponseSchema } from './Types'
import { z } from 'zod'
import { getAndCheckValidation } from '../helpers'
import { makeObservable, observable, action } from 'mobx'
import { Types } from '../Core/Types'
import { HttpGateway } from '../Core/HttpGateway'

const getAndCheckHierarchyResponse = (data: unknown): z.infer<typeof HierarchyResponseSchema> =>
  getAndCheckValidation<z.infer<typeof HierarchyResponseSchema>>(data, HierarchyResponseSchema)

@injectable()
export class RdfInstanceRepository {
  public dataGateway

  hierarchyPm: Record<string, HierarchyClass> | null = null

  constructor(@inject(Types.IDataGateway) dataGateway: HttpGateway) {
    this.dataGateway = dataGateway
    makeObservable(this, {
      hierarchyPm: observable,
      loadHierarchy: action
    })
    this.reset()
  }

  reset = () => {
    this.hierarchyPm = {}
  }

  loadHierarchy = async () => {
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

      this.hierarchyPm = response
    } catch (err) {
      console.error(err);

    }
  }

}
