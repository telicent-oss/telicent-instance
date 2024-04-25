console.log(import.meta)
const config = {
  triplestore: {
    uri: import.meta.env.TRIPLESTORE ?? "http://localhost:3030/",
    topic: import.meta.env.TOPIC ?? "ontology"
  }
}

export default config
