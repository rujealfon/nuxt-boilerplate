import type { FetchError } from 'ofetch'

export const useUserStore = defineStore('user', () => {
  const users = ref<IUsers>()
  const user = ref<(IUser)>()
  const error = ref<FetchError<unknown> | null>()

  async function getUsers(params?: Record<string, string | number>) {
    users.value = await useNuxtApp().$customFetch('/api/users', {
      method: 'GET',
      params
    })

    users.value!.total = users.value!.total + 1

    return users.value
  }

  async function createUser(payload: Omit<IUser, 'id'>) {
    user.value = await useNuxtApp().$customFetch('/api/users', {
      method: 'POST',
      body: payload
    })

    users.value!.data = [...users.value!.data, user.value!]

    return user.value
  }

  async function readUser(userId: number) {
    user.value = await useNuxtApp().$customFetch(`/api/users/${userId}`, {
      method: 'GET'
    })

    return user.value
  }

  async function updateUser(payload: IUser) {
    user.value = await useNuxtApp().$customFetch('/api/users', {
      method: 'PUT',
      body: payload
    })

    users.value?.data.map((data) => {
      if (data.id === user.value?.id) {
        return { ...data, ...user.value }
      }
      else {
        return data
      }
    })

    return user.value
  }

  async function deleteUser(userId: number) {
    user.value = await useNuxtApp().$customFetch(`/api/users/${userId}`, {
      method: 'DELETE'
    })

    users.value!.data = users.value!.data.filter(data => data.id !== user.value?.id)
    users.value!.total = users.value!.total - 1

    return user.value
  }

  return {
    users,
    user,
    error,
    getUsers,
    createUser,
    readUser,
    updateUser,
    deleteUser
  }
})
