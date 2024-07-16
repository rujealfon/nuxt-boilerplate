<script setup lang="ts">
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

// const { getUsers } = userStore

const page = ref<number>(1)
// const error = ref()

// const { execute, error } = await useAsyncData('users', () => userStore.getUsers({ page: page.value }), {
//   immediate: true
// })

// userStore.getUsers()

// console.log(users)

// we could also extract the data, but it's already present in the store
// const { execute } = await useAsyncData('user', () => userStore.getUsers())

// userStore.getUsers()

// getUsers({ page: page.value })
// await useAsyncData('user', () => userStore.getUsers().then(() => true))

// console.log(error)

// const { data, execute, error } = await useAPI('/modules', {
//   immediate: true
// })

// watchEffect(() => {
//   // getUsers({ page: page.value })
//   const { error: err } = useAsyncData('users', () => userStore.getUsers({ page: page.value }))
//   error.value = err.value

//   // userStore.getUsers({ page: page.value })
// })

const { error } = await useAsyncData('users', () => userStore.getUsers({ page: page.value }), {
  watch: [page]
})

const count = ref(0)

// const { data, execute } = useFetch('https://api.nuxt.com/modules')

// async function fetchData() {
//   const { data, execute } = await useLazyFetch('https://api.nuxt.com/modules')
//   // const response = await $fetch('https://api.nuxt.com/modules')

//   // console.log(response.data.value)
//   we.value = data.value
// }

// fetchData()
</script>

<template>
  <section>
    <h1 class="welcome">
      Welcome to the homepage
      <span class="here">HERE</span>
    </h1>
    <AppAlert class="text-blue-500">
      This is an auto-imported component
    </AppAlert>
    <button
      class="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md"
      @click="() => {
      // getUsers()
      }"
    >
      execute
    </button>
    <button
      class="btn scale-125 opacity-50 hover:scale-150 hover:opacity-75 "
      @click="count++"
    >
      Count {{ count }}
    </button>
    <button
      @click="() => {
        page++
      // getUsers({ page: page })
      }"
    >
      Page {{ page }}
    </button>
    <!-- {{ users }} -->

    <ul
      v-for="user in users?.data"
      :key="user.id"
    >
      <li>{{ user.first_name }}</li>
    </ul>

    <!-- <div>{{ data }}</div> -->
    <div>{{ error?.statusCode }}</div>
    <div>{{ error?.statusMessage }}</div>
  </section>
</template>
