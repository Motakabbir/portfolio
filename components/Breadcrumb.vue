<template>
  <section class="relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <img src="~/public/images/backgrounds/breadcrumb-pattern.svg" 
           alt="Breadcrumb Background" 
           class="w-full h-full object-cover">
    </div>
    
    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <div>
              <NuxtLink to="/" class="text-primary-200 hover:text-white">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </NuxtLink>
            </div>
          </li>
          
          <li v-for="(item, index) in items" :key="index">
            <div class="flex items-center">
              <svg class="h-5 w-5 text-primary-300" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              <NuxtLink v-if="item.to" 
                        :to="item.to" 
                        class="ml-4 text-sm font-medium text-primary-200 hover:text-white">
                {{ item.text }}
              </NuxtLink>
              <span v-else 
                    class="ml-4 text-sm font-medium text-white">
                {{ item.text }}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      
      <!-- Title -->
      <h1 class="mt-4 text-3xl font-bold text-white">{{ title }}</h1>
      <p v-if="description" class="mt-2 text-lg text-primary-200">{{ description }}</p>
    </div>
    
    <!-- Bottom gradient -->
    <div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-900/50"></div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
