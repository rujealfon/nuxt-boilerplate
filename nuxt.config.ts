// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      // Override by NUXT_PUBLIC_API_URL
      apiURL: process.env.NUXT_PUBLIC_API_URL // Exposed to the frontend as well.
    }
  },
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
    'pages:extend'(pages) {
      pages.push({
        name: 'login',
        path: '/login',
        file: '@/pages/auth/login.vue'
      },
      {
        name: 'register',
        path: '/register',
        file: '@/pages/auth/register.vue'
      })
    }
  },
  modules: ['@nuxtjs/fontaine', '@nuxt/eslint', 'nuxt-typed-router'],
  eslint: {
    // checker: true,
    config: {
      // stylistic: true,
      stylistic: {
        commaDangle: 'never'
      }
    }
  }
})
