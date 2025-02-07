<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Loader />
    <Navigation />
    <main class="mt-16">
      <slot />
    </main>
    <FooterBottom />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Loader from '@/components/Loader.vue'
import FooterBottom from '@/components/FooterBottom.vue'
import portfolioData from '@/data/portfolio.json'
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

<style>
@import '@/assets/css/colors.css';

/* Apply global color scheme */
:root {
  color-scheme: light dark;
}

body {
  @apply bg-gray-50 dark:bg-gray-900;
  color: var(--color-text-dark);
}

@media (prefers-color-scheme: dark) {
  body {
    color: var(--color-text-light);
  }
}

/* Global link styles */
a {
  color: var(--color-text-primary);
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: var(--color-primary-700);
}

/* Global button styles */
button,
.button {
  @apply inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg font-medium;
  @apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500;
  @apply dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-primary-400;
  @apply transition-all duration-200;
}

/* Card styles */
.card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden;
  @apply border border-gray-200 dark:border-gray-700;
  @apply hover:shadow-xl transition-shadow duration-200;
}

/* Section styles */
section {
  @apply py-12 sm:py-20;
}

/* Heading styles */
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold text-gray-900 dark:text-white;
}

/* Form styles */
input,
textarea,
select {
  @apply block w-full rounded-lg border-gray-300 shadow-sm;
  @apply focus:ring-primary-500 focus:border-primary-500 focus:ring-2;
  @apply dark:bg-gray-700 dark:border-gray-600 dark:text-white;
  @apply dark:focus:ring-primary-400 dark:focus:border-primary-400;
}

/* Badge styles */
.badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  background-color: var(--color-primary-100);
  color: var(--color-primary-800);
}

.dark .badge {
  background-color: var(--color-primary-900);
  color: var(--color-primary-100);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
