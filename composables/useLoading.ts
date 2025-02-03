import { ref } from 'vue'

const isLoading = ref(false)
const loadingText = ref('')

export function useLoading() {
  const start = (text = 'Loading...') => {
    isLoading.value = true
    loadingText.value = text
  }

  const finish = () => {
    isLoading.value = false
    loadingText.value = ''
  }

  return {
    isLoading,
    loadingText,
    start,
    finish
  }
}
