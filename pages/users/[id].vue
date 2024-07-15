<script setup lang="ts">
const route = useRoute('users-id')
// const router = useRouter()

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const userId = computed(() => route.params.id)

const { error } = await useAsyncData('users', () =>
  userStore.getUsers({ page: userId.value }), {
  watch: [userId]
})

const data = await useCustomFetch(`/api/users/${userId.value}`)

console.log(data)
// console.log(window.navigator)

// localStorage.setItem('myCat', 'Tom')

// const cat = localStorage.getItem('myCat')
// console.log(cat)

// console.log(localStorage())
</script>

<template>
  <section>
    <h1>Users</h1>
    <p>{{ userId }}</p>

    <button
      @click="() => {
        const id = parseInt(userId) - 1
        if (id <= 0) {
          return
        }

        navigateTo({ name: 'users-id', params: { id } })
      }"
    >
      Previous
    </button>

    <button
      @click="() => {
        const id = parseInt(userId) + 1

        navigateTo({ name: 'users-id', params: { id } })
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
  </section>
</template>
