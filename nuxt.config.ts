// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // https://nuxt.com/docs/getting-started/styling#lcp-advanced-optimizations
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1)
        }
      }
    },
  },
  modules: ['@nuxtjs/fontaine', '@nuxt/eslint'],
  eslint: {
    // checker: true,
    config: {
      stylistic: true,
    },
  },
})
