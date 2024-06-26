<script setup lang="ts">
const route = useRoute('users-id')
const router = useRouter()

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const userId = computed(() => route.params.id)

const { error } = await useAsyncData('users', () =>
  userStore.getUsers({ page: userId.value }), {
  watch: [userId]
})
</script>

<template>
  <h1>Users</h1>
  <p>{{ userId }}</p>

  <button
    @click="() => {
      const id = parseInt(userId) - 1
      if (id <= 0) {
        return
      }

      router.push({ name: 'users-id', params: { id } })
    }"
  >
    Previous
  </button>

  <button
    @click="() => {
      const id = parseInt(userId) + 1
      router.push({ name: 'users-id', params: { id } })
    }"
  >
    Next
  </button>

  <ul
    v-for="user in users?.data"
    :key="user.id"
  >
    <li>{{ user.first_name }}</li>
  </ul>
  <div>{{ error?.message }}</div>
  <div>{{ error?.statusCode }}</div>
</template>
