<script setup lang="ts">
const route = useRoute('posts-id')

definePageMeta({
  validate: async (route) => {
    const params = route.params as { id: string }
    // Check if the id is made up of digits
    return typeof params.id === 'string' && /^\d+$/.test(params.id)
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
