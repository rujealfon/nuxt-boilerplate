<script setup lang="ts">
const route = useRoute('posts-id')

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>

<template>
  <div />
</template>

<style scoped>

</style>
