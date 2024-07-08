/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api
  })
}

// import type { UseFetchOptions } from 'nuxt/app'

// export function useCustomFetch<T>(
//   url: string | (() => string),
//   options: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> }
// ) {
//   return useFetch(url, {
//     ...options,
//     $fetch: useNuxtApp().$api
//   })
// }
