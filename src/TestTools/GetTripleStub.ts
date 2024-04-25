import dataFactory from "@rdfjs/data-model"

export const GetEdgeQuadStub = () => {
  const subject = 'https://telicent.io/#0b791546-4f5c-4d58-9b62-7b7608af6468'
  const predicate = 'http://ies.data.gov.uk/ontology/ies4#aCopyOf'
  const object = 'http://telicent.io/data#6cd17931-5c29-4cb9-8c26-745939aa9335'

  return dataFactory.quad(
    dataFactory.namedNode(subject),
    dataFactory.namedNode(predicate),
    dataFactory.namedNode(object)
  )
}

export const GetNodeQuadStub = () => {
  const subject = 'http://telicent.io/data#0b791546-4f5c-4d58-9b62-7b7608af6468'
  const predicate = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
  const object = 'http://ies.data.gov.uk/ontology/ies4#Person'

  return dataFactory.quad(
    dataFactory.namedNode(subject),
    dataFactory.namedNode(predicate),
    dataFactory.namedNode(object)
  )

}
