import { defineNuxtPlugin } from '#app'
import { useLoading } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const { start, finish } = useLoading()

  nuxtApp.hook('page:start', () => {
    start('Loading page...')
  })

  nuxtApp.hook('page:finish', () => {
    finish()
  })

  nuxtApp.hook('app:error', () => {
    finish()
  })

  return {
    provide: {
      loading: {
        start,
        finish
      }
    }
  }
})
