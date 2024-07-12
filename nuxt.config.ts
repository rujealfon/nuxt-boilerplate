// import type { NuxtPage } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // https://github.com/nuxt/nuxt/discussions/27519
  ssr: process.env.NUXT_USE_SSR === 'true',
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

      // Remove pages that start with auth-
      pages.filter(page => !page.name?.startsWith('auth-'))

      // // Prevent creating routes for any .ts files
      // function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
      //   const pagesToRemove = []
      //   for (const page of pages) {
      //     if (page.file && pattern.test(page.file)) {
      //       pagesToRemove.push(page)
      //     }
      //     else {
      //       removePagesMatching(pattern, page.children)
      //     }
      //   }
      //   for (const page of pagesToRemove) {
      //     pages.splice(pages.indexOf(page), 1)
      //   }
      // }
      // removePagesMatching(/\.ts$/, pages)
    },
    'prerender:routes'({ routes }) {
      // https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering
      if (process.env.NUXT_USE_SSR === 'true') return

      routes.clear() // Do not generate any routes (except the defaults)
    }
  },
  modules: [
    '@nuxt/eslint',
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'nuxt-security'
  ],
  eslint: {
    // checker: true,
    config: {
      // stylistic: true,
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  imports: {
    dirs: ['./models']
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp'
    }
  },
  // routeRules: {
  // '/users/*': { prerender: true }
  // },
  // https://nuxt.com/docs/guide/concepts/typescript
  typescript: {
    typeCheck: true
  }
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ['/'],
  //     ignore: ['/users']
  //   }
  // }
})
