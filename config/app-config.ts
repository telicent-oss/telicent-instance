const env = window._env_;

const config = {
  tripleStore: {
    uri: env.TRIPLE_STORE,
    topic: env.TOPIC
  }
}

export default config
