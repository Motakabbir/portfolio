<template>
  <nav class="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-white flex items-center">
            <i class="fas fa-home mr-2"></i> Morshed
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.link"
            class="text-white font-medium hover:text-gray-200 transition duration-300 flex items-center">
            <i :class="item.icon" class="mr-2"></i> {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white focus:outline-none">
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-blue-500 transition-all duration-300">
      <div class="py-2 space-y-2">
        <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.link"
          class="block text-white px-4 py-2 hover:bg-blue-600 transition duration-300 flex items-center"
          @click="mobileMenuOpen = false">
          <i :class="item.icon" class="mr-2"></i> {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const menuItems = [
  { name: 'Home', link: '/', icon: 'fas fa-home' },
  { name: 'About', link: '/about', icon: 'fas fa-user' },
  { name: 'Services', link: '/services', icon: 'fas fa-cogs' },
  { name: 'Projects', link: '/projects', icon: 'fas fa-briefcase' },
  { name: 'Blog', link: '/blog', icon: 'fas fa-blog' },
  { name: 'Contact', link: '/contact', icon: 'fas fa-envelope' }
];
</script>

<style scoped>
nav {
  transition: background-color 0.3s ease-in-out;
}
</style>
