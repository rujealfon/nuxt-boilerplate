declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    apiURL: string
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}
