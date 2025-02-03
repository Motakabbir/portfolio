<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header Section -->
    <section class="relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <img src="~/assets/images/backgrounds/projects-pattern.svg" 
             alt="Projects Pattern" 
             class="w-full h-full object-cover">
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">My Projects</h1>
          <p class="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto">
            A showcase of my latest work and achievements
          </p>
        </div>
      </div>

      <!-- Bottom gradient -->
      <div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-50"></div>
    </section>

    <!-- Filter Section -->
    <div class="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-sm p-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center space-x-4">
            <FunnelIcon class="h-5 w-5 text-gray-400" />
            <div class="flex space-x-2">
              <button v-for="category in categories" 
                      :key="category"
                      @click="selectedCategory = category"
                      :class="[
                        selectedCategory === category 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        'px-4 py-2 rounded-full text-sm font-medium transition-colors'
                      ]">
                {{ category }}
              </button>
            </div>
          </div>
          <div class="mt-4 sm:mt-0">
            <div class="relative">
              <input type="text" 
                     v-model="searchQuery"
                     placeholder="Search projects..." 
                     class="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg focus:ring-primary focus:border-primary">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pb-16">
      <TransitionGroup 
        name="stagger-list"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <div v-for="(project, index) in filteredProjects" 
             :key="project.id"
             :data-index="index"
             class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover-lift">
          <!-- Project Image -->
          <div class="relative aspect-video overflow-hidden">
            <img :src="project.image" 
                 :alt="project.title"
                 class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {{ project.category }}
              </span>
            </div>
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            
            <!-- Project Links -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t">
              <div class="flex space-x-4">
                <a v-if="project.github" 
                   :href="project.github" 
                   target="_blank"
                   class="text-gray-500 hover:text-primary transition-colors">
                  <CodeBracketIcon class="h-5 w-5" />
                </a>
                <a v-if="project.demo" 
                   :href="project.demo" 
                   target="_blank"
                   class="text-gray-500 hover:text-primary transition-colors">
                  <GlobeAltIcon class="h-5 w-5" />
                </a>
              </div>
              <NuxtLink :to="'/projects/' + project.id" 
                        class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                View Details
                <ArrowRightIcon class="h-4 w-4 ml-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" 
           class="text-center py-16">
        <FolderOpenIcon class="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
        <p class="text-gray-600">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  FunnelIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  FolderOpenIcon
} from '@heroicons/vue/24/outline'
import portfolioData from '@/data/portfolio.json'
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

// Simulate data fetching
onMounted(async () => {
  nuxtApp.$loading.start('Loading Projects')
  await new Promise(resolve => setTimeout(resolve, 1000))
  nuxtApp.$loading.finish()
})

const searchQuery = ref('')
const selectedCategory = ref('All')

// Get unique project categories
const categories = computed(() => {
  const allCategories = portfolioData.projects.map(project => project.category)
  return ['All', ...new Set(allCategories)]
})

// Get all projects
const projects = computed(() => {
  return portfolioData.projects
})

// Filter projects based on search and category
const filteredProjects = computed(() => {
  let filtered = projects.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(project => 
      project.title.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query)
    )
  }

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(project => project.category === selectedCategory.value)
  }

  return filtered
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.transform = 'scale(0.5)'
}

function onEnter(el, done) {
  const delay = el.dataset.index * 100
  setTimeout(() => {
    el.style.opacity = 1
    el.style.transform = 'scale(1)'
    done()
  }, delay)
}
</script>