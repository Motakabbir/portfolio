<template>
  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-6 py-12">
      <div v-if="project" class="max-w-4xl mx-auto">
        <!-- Project Header -->
        <div class="mb-12">
          <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
          <div class="flex gap-4 mb-8">
            <span class="text-gray-600">{{ formatDate(project.date) }}</span>
            <div class="flex gap-4">
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                class="text-primary-500 hover:text-primary-600">
                Live Demo →
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                class="text-primary-500 hover:text-primary-600">
                GitHub →
              </a>
            </div>
          </div>
        </div>

        <!-- Project Image -->
        <img :src="project.image" :alt="project.title" class="w-full h-[400px] object-cover rounded-xl mb-12"
          @error="handleImageError">

        <!-- Technologies -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Technologies Used</h2>
          <div class="flex flex-wrap gap-3">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Project Description -->
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-8">{{ project.description }}</p>
          <div class="whitespace-pre-wrap text-gray-600">{{ project.fullDescription }}</div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="flex justify-center items-center min-h-[60vh]">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import projectsData from '@/data/portfolio.json'

const route = useRoute()
const project = ref(null)

onMounted(() => {
  project.value = projectsData.projects.find(p => p.id === route.params.id)
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

const handleImageError = (event) => {
  event.target.src = '/assets/images/placeholder.svg'
  event.target.classList.add('image-error')
}
</script>

<style scoped>
.image-error {
  object-fit: contain;
  padding: 2rem;
  background: #f3f4f6;
}
</style>
