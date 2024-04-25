/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIPLESTORE: string
  readonly VITE_TOPIC: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
