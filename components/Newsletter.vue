<template>
  <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
    <h3 class="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
    <p class="text-primary-100 mb-4">Get the latest articles and insights delivered straight to your inbox.</p>
    
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <div>
        <input 
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          required
        />
      </div>
      <div class="flex items-start">
        <input 
          v-model="consent"
          type="checkbox"
          id="consent"
          class="mt-1.5 rounded border-white/20 bg-white/10 text-primary-500 focus:ring-primary-500"
          required
        />
        <label for="consent" class="ml-2 text-sm text-primary-100">
          I agree to receive emails and accept the privacy policy
        </label>
      </div>
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full px-4 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors disabled:opacity-50"
      >
        {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </form>

    <!-- Success Message -->
    <div v-if="showSuccess" class="mt-4 p-3 bg-green-500/20 rounded-lg text-sm">
      Thanks for subscribing! Please check your email to confirm.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const consent = ref(false)
const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would typically make an API call to your newsletter service
    // For now, we'll simulate a successful subscription
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    showSuccess.value = true
    email.value = ''
    consent.value = false
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
