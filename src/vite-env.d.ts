/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIPLE_STORE: string
  readonly VITE_TOPIC: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
