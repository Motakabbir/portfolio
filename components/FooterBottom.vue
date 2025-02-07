<template>
  <div class="bg-white border-t border-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Newsletter Subscription -->
      <div class="bg-primary-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p class="text-gray-600 mb-6">Get notified about new articles, tutorials, and tech insights.</p>

          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" v-model="newsletterEmail" placeholder="Enter your email"
              class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            <button type="submit"
              class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-6 mt-20">
        <div class="text-2xl font-bold text-gray-900">{{ portfolio?.personal?.name }}</div>

        <div class="flex flex-wrap justify-center gap-4">
          <template v-for="social in portfolio?.personal?.social" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener noreferrer"
              class="text-gray-600 hover:text-primary-600 transition-colors p-2" :title="social.name">
              <span class="sr-only">{{ social.name }}</span>
              <span v-html="social.icon" class="w-14 h-14"></span>
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"></svg>
            </a>
          </template>
        </div>
        <!-- Freelance Profiles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
          <!-- Upwork Profile -->
          <a href="https://www.upwork.com/freelancers/~01865515acfc0df114?mp_source=share" target="_blank"
            class="flex items-center gap-4 p-4 rounded-xl bg-[#6FDA44] bg-opacity-10 hover:bg-opacity-20 transition-colors">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6FDA44]">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.867 2.332 5.203 5.201 5.203 2.867 0 5.2-2.336 5.2-5.203v-1.226c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Hire me on Upwork</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Top Rated Plus Developer</p>
            </div>
          </a>

          <!-- Fiverr Profile -->
          <a href="https://www.fiverr.com/s/Q75Nev6" target="_blank"
            class="flex items-center gap-4 p-4 rounded-xl bg-[#1DBF73] bg-opacity-10 hover:bg-opacity-20 transition-colors">
            <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1DBF73]">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M23 9.5h-3.5v-3h-2v3H14v2h3.5v3h2v-3H23v-2zM4.5 7.5C3.1 7.5 2 6.4 2 5s1.1-2.5 2.5-2.5S7 3.6 7 5 5.9 7.5 4.5 7.5zm0-4C3.7 3.5 3 4.2 3 5s.7 1.5 1.5 1.5S6 5.8 6 5 5.3 3.5 4.5 3.5zm0 5C2 8.5 0 10.5 0 13v3h9v-3c0-2.5-2-4.5-4.5-4.5zm-3 6v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2H1.5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Find me on Fiverr</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">Level 2 Seller</p>
            </div>
          </a>
        </div>

        <div class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} {{ portfolio?.personal?.name }}. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { CalendarIcon, ClockIcon } from '@heroicons/vue/24/outline'
import portfolioData from '@/data/portfolio.json'

const portfolio = ref({
  personal: {},
})
const { start, finish } = useLoading()


onMounted(async () => {
  try {
    // Load portfolio data
    portfolio.value = portfolioData
    await new Promise(resolve => setTimeout(resolve, 500))
  } catch (error) {
    console.error('Error loading portfolio data:', error)
  } finally {
    finish()
  }
})
</script>