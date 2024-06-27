import type { FetchError } from 'ofetch'

export const useUserStore = defineStore('user', () => {
  const users = ref<IUsers>()
  const error = ref<FetchError<unknown> | null>()

  async function getUsers(params?: Record<string, string | number>) {
    users.value = await useNuxtApp().$customFetch<IUsers>('/api/users', { params })
    return users.value
  }

  return {
    users,
    error,
    getUsers
  }
})
