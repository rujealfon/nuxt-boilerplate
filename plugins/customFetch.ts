import type { FetchContext } from 'ofetch'

export default defineNuxtPlugin(() => {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const customFetch = $fetch.create({
    baseURL: config.public.apiURL,
    onRequest({ options }: FetchContext) {
      // console.log({ options })
      if (userAuth.value) {
        const headers = options.headers ||= {}

        // Add Authorization header
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
    onResponse({ response }: FetchContext) {
      if (response?._data.token) {
        userAuth.value = response._data.token
      }
    },
    async onResponseError({ response }: FetchContext) {
      if (response?.status === 401) {
        await navigateTo('/login')
      }
    }
  })

  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      customFetch
    }
  }
})
