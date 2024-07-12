export default defineNuxtRouteMiddleware((_to, _from) => {
  function isAuthenticated() {
    return false
  }

  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo('/')
  }
})
