export default defineNuxtRouteMiddleware((to, from) => {
  const { start, finish } = useLoading()
  
  if (to.path !== from.path) {
    start('Loading page...')
    setTimeout(finish, 500) // Ensure minimum loading time
  }
})
