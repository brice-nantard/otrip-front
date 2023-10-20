/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OTRIP_BACK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}