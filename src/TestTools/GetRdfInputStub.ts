export const GetRawPrefixDataStub = {
  ":": "<http://telicent.io/ontology/>",
  "xsd:": "<http://www.w3.org/2001/XMLSchema#>",
  "dc:": "<http://purl.org/dc/elements/1.1/>",
  "rdf:": "<http://www.w3.org/1999/02/22-rdf-syntax-ns#>",
  "rdfs:": "<http://www.w3.org/2000/01/rdf-schema#>",
  "owl:": "<http://www.w3.org/2002/07/owl#>",
  "telicent:": "<http://telicent.io/ontology/>",
}

export const GetPrefixObjectStub = {
  ":": "http://telicent.io/ontology/",
  "xsd:": "http://www.w3.org/2001/XMLSchema#",
  "dc:": "http://purl.org/dc/elements/1.1/",
  "rdf:": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "rdfs:": "http://www.w3.org/2000/01/rdf-schema#",
  "owl:": "http://www.w3.org/2002/07/owl#",
  "telicent:": "http://telicent.io/ontology/",
}

export const GetRdfInputStub = `@prefix : <http://telicent.io/ontology/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix telicent: <http://telicent.io/ontology/> .
@prefix data: <http://example.com/rdf/testdata#> .
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#> .
data:6cd17931-5c29-4cb9-8c26-745939aa9335 a ies:BoundingState .
data:0b791546-4f5c-4d58-9b62-7b7608af6468 a ies:Person .
data:611bb20a-9c45-4d4e-b4ac-49a216eb18a8 a ies:GivenName .
data:0b791546-4f5c-4d58-9b62-7b7608af6468 ies:aCopyOf data:6cd17931-5c29-4cb9-8c26-745939aa9335 .
data:611bb20a-9c45-4d4e-b4ac-49a216eb18a8 ies:isStateOf data:0b791546-4f5c-4d58-9b62-7b7608af6468 .
data:4c48ac99-61fd-4fa5-81e2-aab8e7648618 a ies:Event .
data:0b791546-4f5c-4d58-9b62-7b7608af6468 ies:EventParticipant data:4c48ac99-61fd-4fa5-81e2-aab8e7648618 .
`

export const GetRdfAandBClassesWithEdge = `@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

data:nodeA rdf:type ies:nodeAType;
    ies:edgeType data:nodeB.
data:nodeB rdf:type ies:nodeBType.
`

export const GetRdfAClassOnly = `@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

data:nodeA rdf:type ies:nodeAType.
`

export const GetRdfAandBClassesOnly = `@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

data:nodeA rdf:type ies:nodeAType.
data:nodeB rdf:type ies:nodeBType.
`

export const GetPrefixRdfStub = `@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.
`

export const GetRdfAandBClassesWithEdgeAndLiteral = `@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

data:nodeA rdf:type ies:nodeAType;
    ies:edgeType data:nodeB.
data:nodeB rdf:type ies:nodeBType;
    ies:representativeValue "Anderson".
`
