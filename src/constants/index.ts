export const HIERARCHY_QUERY = `SELECT ?sub ?super ?subType ?subComment ?subLabel 
        WHERE                                                      
        {                                                          
           ?sub rdfs:subClassOf ?super .                          
            OPTIONAL {?sub rdf:type ?subType }                     
            OPTIONAL {?sub rdfs:label ?subLabel}                   
            OPTIONAL {?sub rdfs:comment ?subComment}               
        }`;

export const rootHierarchyUri = "http://ies.data.gov.uk/ontology/ies4#ExchangedItem"

export const OBJECT_PROPERTY_QUERY = `SELECT ?object_property 
WHERE {
		?object_property a owl:ObjectProperty .
}`

export const DATATYPE_PROPERTY_QUERY = `SELECT ?data_type_property
WHERE {
		?data_type_property a owl:DatatypeProperty .
}`
