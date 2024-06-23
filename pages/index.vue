<script setup lang="ts">
const { data, execute } = await useAPI('/modules', {
  immediate: true
})

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
  <h1>Welcome to the homepage</h1>
  <AppAlert>
    This is an auto-imported component
  </AppAlert>
  <button
    @click="() => {
      data = []
      execute()
    }"
  >
    execute
  </button>
  <div>{{ data }}</div>
</template>
