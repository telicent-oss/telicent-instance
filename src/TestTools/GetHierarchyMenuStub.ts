export const HierarchyMenuStub = {
  id: "http://ies.data.gov.uk/ontology/ies4#ExchangedItem",
  label: "Exchanged Item",
  name: "http://ies.data.gov.uk/ontology/ies4#ExchangedItem",
  tooltip: "An ExchangedItem is a real world ‘thing’ about which a sender might retain specific knowledge, some or all of which is needed to be shared (exchanged) with one or more recipients.",
  type: "http://www.w3.org/2000/01/rdf-schema#Class",
  children: [
    {
      id: "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement",
      label: "Class Of Class Of Element",
      name: "http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement",
      tooltip: "An rdfs:Class and an ExchangedItem whose instances are classes of classes of Element",
      type: "http://www.w3.org/2000/01/rdf-schema#Class",
      children: []
    },
    {
      id: "http://ies.data.gov.uk/ontology/ies4#Element",
      label: "Element",
      name: "http://ies.data.gov.uk/ontology/ies4#Element",
      tooltip: "An ExchangedItem that has a spatial extent and can have start and end dates",
      type: "http://www.w3.org/2000/01/rdf-schema#Class",
      children: [{
        id: "http://ies.data.gov.uk/ontology/ies4#Entity",
        label: "Entity",
        name: "http://ies.data.gov.uk/ontology/ies4#Entity",
        tooltip: "An Entity typically represents a tangible thing like a Person, a Communications Device, or a Location.",
        type: "http://www.w3.org/2000/01/rdf-schema#Class",
        children: []
      }]
    }]
}
