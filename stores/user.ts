// import { defineStore } from 'pinia'
import type { FetchError } from 'ofetch'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { User, Users } from '@/models/user.model'

export const useUserStore = defineStore('user', () => {
  const users = ref<Users>()
  const error = ref<FetchError<unknown> | null>()

  async function getUsers(params?: Record<string, string | number>) {
    users.value = await useNuxtApp().$customFetch<Users>('/api/users', { params })
    return users.value
  }

  return {
    users,
    error,
    getUsers
  }
})
