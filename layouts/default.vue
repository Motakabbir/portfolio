<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Loader />
    <Navigation />
    <main class="mt-16">
      <slot />
    </main>
    <FooterBottom />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Loader from '@/components/Loader.vue'
import FooterBottom from '@/components/FooterBottom.vue'
import portfolioData from '@/data/portfolio.json'
import ScrollToTop from '@/components/ScrollToTop.vue'

const newsletterEmail = ref('')
const portfolio = ref({
  personal: portfolioData.personal || {},
})

async function subscribeNewsletter() {
  if (newsletterEmail.value) {
    // Implement newsletter subscription logic
    console.log('Subscribing:', newsletterEmail.value)
    newsletterEmail.value = ''
  }
}
</script>
