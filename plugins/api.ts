export default defineNuxtPlugin(() => {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiURL ?? 'https://api.nuxt.com',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRequest({ request, options, error }) {
      // console.log({ options })
      if (userAuth.value) {
        const headers = options.headers ||= {}

        // // Add Authorization header
        // options.headers = options.headers || {}
        // options.headers.Authorization = `Bearer ${userAuth.value}`

        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${userAuth.value}`])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${userAuth.value}`)
        }
        else {
          headers.Authorization = `Bearer ${userAuth.value}`
        }
      }
    },
    onResponse({ response }) {
      if (response._data.token) {
        userAuth.value = response._data.token
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await navigateTo('/login')
      }
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})
