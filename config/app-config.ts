const config = {
  tripleStore: {
    uri: import.meta.env.TRIPLE_STORE ?? "http://localhost:3030/",
    topic: import.meta.env.TOPIC ?? "ontology"
  }
}

export default config
