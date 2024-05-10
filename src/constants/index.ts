import appConfigJson from "../../app.config.json";
import z from "zod";

const AppConfigJsonSchema = z.object({
  name: z.string(),
  repo_name: z.string(),
  app_name: z.string(),
  app_name_snake_case: z.string(),
  "uri-basename": z.string(),
  brandColor: z.string(),
});

export const APP_CONFIG_JSON = AppConfigJsonSchema.parse(appConfigJson);

export const INITIAL_RDF_PREFIXES: Record<string, string> = {
  data: "http://data.gov/data#",
  ies: "http://ies.data.gov.uk/ontology/ies4#",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  telicent: "http://telicent.io/ontology/",
  xsd: "http://www.w3.org/2001/XMLSchema#",
};

export const HIERARCHY_QUERY = `SELECT ?sub ?super ?subType ?subComment ?subLabel 
        WHERE                                                      
        {                                                          
           ?sub rdfs:subClassOf ?super .                          
            OPTIONAL {?sub rdf:type ?subType }                     
            OPTIONAL {?sub rdfs:label ?subLabel}                   
            OPTIONAL {?sub rdfs:comment ?subComment}               
        }`;

export const rootHierarchyUri = "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"
