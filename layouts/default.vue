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


const portfolio = ref({
  personal: portfolioData.personal || {},
})


</script>
