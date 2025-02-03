<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Loader />
    <Navigation />
    <main>
      <slot />
    </main>
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col space-y-8">
          <!-- Social Links Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <a v-for="social in socials" 
               :key="social.name"
               :href="social.url"
               target="_blank"
               class="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-colors group">
              <img :src="social.icon" :alt="social.name" class="h-8 mb-2">
              <span class="text-sm text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {{ social.name }}
              </span>
            </a>
          </div>

          <!-- Freelance Profiles -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            <!-- Upwork Profile -->
            <a href="https://www.upwork.com/freelancers/~YOUR_UPWORK_ID" 
               target="_blank"
               class="flex items-center gap-4 p-4 rounded-xl bg-[#6FDA44] bg-opacity-10 hover:bg-opacity-20 transition-colors">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6FDA44]">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.867 2.332 5.203 5.201 5.203 2.867 0 5.2-2.336 5.2-5.203v-1.226c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Hire me on Upwork</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Top Rated Plus Developer</p>
              </div>
            </a>

            <!-- Fiverr Profile -->
            <a href="https://www.fiverr.com/YOUR_FIVERR_USERNAME" 
               target="_blank"
               class="flex items-center gap-4 p-4 rounded-xl bg-[#1DBF73] bg-opacity-10 hover:bg-opacity-20 transition-colors">
              <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1DBF73]">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 9.5h-3.5v-3h-2v3H14v2h3.5v3h2v-3H23v-2zM4.5 7.5C3.1 7.5 2 6.4 2 5s1.1-2.5 2.5-2.5S7 3.6 7 5 5.9 7.5 4.5 7.5zm0-4C3.7 3.5 3 4.2 3 5s.7 1.5 1.5 1.5S6 5.8 6 5 5.3 3.5 4.5 3.5zm0 5C2 8.5 0 10.5 0 13v3h9v-3c0-2.5-2-4.5-4.5-4.5zm-3 6v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2H1.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Find me on Fiverr</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Level 2 Seller</p>
              </div>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {{ new Date().getFullYear() }} MD Motakabbir Morshed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Loader from '@/components/Loader.vue'
import portfolioData from '@/data/portfolio.json'

const portfolio = ref({
  personal: portfolioData.personal || {},
})
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
h1, h2, h3, h4, h5, h6 {
  @apply font-bold text-gray-900 dark:text-white;
}

/* Form styles */
input, textarea, select {
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
