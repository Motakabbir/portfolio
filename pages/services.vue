<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header Section -->
    <section class="relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <img src="~/public/images/backgrounds/services-pattern.svg" 
             alt="Services Pattern" 
             class="w-full h-full object-cover">
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Professional Services</h1>
          <p class="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto">
            Delivering high-quality software solutions with modern technologies and best practices
          </p>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="max-w-7xl mx-auto h-full relative">
          <!-- Floating Icons -->
          <div class="absolute top-1/4 right-10 animate-float">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
          </div>
          <div class="absolute bottom-1/4 left-12 animate-float-slow">
            <div class="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Gradient -->
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900"></div>
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in data.services" :key="service.id"
             class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="p-8">
            <div class="text-4xl mb-4">{{ service.icon }}</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            
            <!-- Features -->
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Key Features:</h4>
              <ul class="space-y-2">
                <li v-for="feature in service.features" :key="feature"
                    class="flex items-start">
                  <svg class="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div>
              <h4 class="font-semibold text-gray-900 mb-3">Technologies:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in service.technologies" :key="tech"
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Process -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">My Work Process</h2>
          <p class="mt-4 text-xl text-gray-600">How I approach every project to ensure success</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in workProcess" :key="index"
               class="relative">
            <!-- Step number -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              {{ index + 1 }}
            </div>
            <!-- Content -->
            <div class="bg-white rounded-xl shadow-lg p-6 pt-10 text-center h-full">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Client Testimonials</h2>
          <p class="mt-4 text-xl text-gray-600">What my clients say about working with me</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in data.testimonials" :key="testimonial.id"
               class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-6">              
              <NuxtPicture :src="testimonial.image" :alt="testimonial.name"
                   class="w-14 h-14 rounded-full object-cover"/>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-gray-600">{{ testimonial.position }}</p>
              </div>
            </div>
            <blockquote class="text-gray-600 italic">
              "{{ testimonial.quote }}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 class="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <a href="mailto:motakabbir.morshed@gmail.com"
             class="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-colors">
            Get in Touch
            <svg class="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import portfolioData from '~/data/portfolio.json'
import NuxtPicture from '@/components/NuxtPicture.vue'
const data = ref(portfolioData)

const workProcess = [
  {
    title: 'Discovery',
    description: 'Understanding your needs, goals, and project requirements through detailed consultation.'
  },
  {
    title: 'Planning',
    description: 'Creating a comprehensive project plan with timeline, milestones, and deliverables.'
  },
  {
    title: 'Development',
    description: 'Building your solution using modern technologies and best development practices.'
  },
  {
    title: 'Delivery',
    description: 'Thorough testing, deployment, and ongoing support to ensure project success.'
  }
]
</script>
