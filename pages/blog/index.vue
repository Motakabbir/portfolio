<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
      <!-- Background -->
      <div class="absolute inset-0 opacity-75">
        <img src="~/public/images/backgrounds/blog-pattern.svg" alt="Blog Pattern" class="w-full h-full object-cover">
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Blog & Insights</h1>
          <p class="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about software development, AI, and modern technologies
          </p>
        </div>
      </div>

      <!-- Bottom Gradient -->
      <div class="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-50"></div>
    </section>

    <!-- Featured Post -->
    <div v-if="featuredPost" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="lg:grid lg:grid-cols-2">
          <!-- Image -->
          <div class="relative h-64 lg:h-full">
            <img :src="featuredPost.coverImage" :alt="featuredPost.title"
              class="absolute inset-0 w-full h-full object-cover" @error="handleImageError">
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent lg:hidden"></div>
          </div>

          <!-- Content -->
          <div class="relative lg:ml-8 p-8">
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <CalendarIcon class="h-5 w-5 mr-2" />
              {{ formatDate(featuredPost.date) }}
              <span class="mx-2">•</span>
              <ClockIcon class="h-5 w-5 mr-2" />
              {{ featuredPost.readTime }}
            </div>

            <div v-if="featuredPost.category"
              :class="[featuredPost.category.color || 'bg-primary-100', 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4']">
              <HashtagIcon class="h-4 w-4 mr-1" />
              {{ featuredPost.category.name }}
            </div>

            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              {{ featuredPost.title }}
            </h2>
            <p class="text-gray-600 mb-6 line-clamp-3">{{ featuredPost.excerpt }}</p>

            <!-- Author -->
            <div v-if="featuredPost.author" class="flex items-center mb-6">
              <img v-if="featuredPost.author.avatar" :src="featuredPost.author.avatar" :alt="featuredPost.author.name"
                class="h-10 w-10 rounded-full mr-3" @error="handleImageError">
              <UserCircleIcon v-else class="h-10 w-10 text-gray-400 mr-3" />
              <div>
                <div class="text-sm font-medium text-gray-900">{{ featuredPost.author.name }}</div>
                <div class="text-sm text-gray-500">{{ featuredPost.author.role }}</div>
              </div>
            </div>
            <NuxtLink :to="'/blog/' + featuredPost.id"
              class="inline-flex items-center text-primary-600 hover:text-primary-700">
              Read More
              <ArrowRightIcon class="h-5 w-5 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <!-- Search -->
        <div class="relative w-full sm:w-96">
          <input type="text" v-model="searchQuery" placeholder="Search posts..."
            class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
          <MagnifyingGlassIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-2">
          <button v-for="category in categories" :key="category" @click="selectedCategory = category" :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]">
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="filteredPosts.length === 0" class="text-center py-12">
        <DocumentTextIcon class="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
        <p class="text-gray-600">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>

      <TransitionGroup v-else name="stagger-list" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        appear @before-enter="onBeforeEnter" @enter="onEnter">
        <article v-for="(post, index) in filteredPosts" :key="post.id" :data-index="index"
          class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <router-link :to="'/blog/' + post.id">
            <img :src="post.coverImage" :alt="post.title" class="w-full h-48 object-cover" @error="handleImageError">

            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-if="post.category"
                  :class="[post.category.color || 'bg-primary-100', 'px-3 py-1 text-sm font-medium rounded-full inline-flex items-center']">
                  <HashtagIcon class="h-4 w-4 mr-1" />
                  {{ post.category.name }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>

              <div class="flex items-center justify-between">
                <!-- Author -->
                <div v-if="post.author" class="flex items-center">
                  <img v-if="post.author.avatar" :src="post.author.avatar" :alt="post.author.name"
                    class="h-8 w-8 rounded-full mr-2" @error="handleImageError">
                  <UserCircleIcon v-else class="h-8 w-8 text-gray-400 mr-2" />
                  <div class="text-sm text-gray-600">{{ post.author.name }}</div>
                </div>

                <!-- Date and Read Time -->
                <div class="flex items-center text-sm text-gray-500">
                  <CalendarIcon class="h-4 w-4 mr-1" />
                  {{ formatDate(post.date) }}
                  <span class="mx-2">•</span>
                  <ClockIcon class="h-4 w-4 mr-1" />
                  {{ post.readTime }}
                </div>
              </div>
            </div>
          </router-link>
        </article>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CalendarIcon,
  ClockIcon,
  ExclamationCircleIcon,
  HashtagIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  UserCircleIcon
} from '@heroicons/vue/24/outline'
import portfolioData from '@/data/portfolio.json'
import { useHead } from '#imports';
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Experienced Full Stack Developer specializing in PHP, Python, and JavaScript. Expertise in Laravel, CodeIgniter, Django, React, Vue, Nuxt, and Next.js. Skilled in GitHub, GitLab, API development, and modern web technologies. Hire a professional for scalable and high-performance web solutions.' },
    { name: 'keywords', content: 'PHP Developer, Python Developer, JavaScript Developer, Laravel Developer, CodeIgniter Developer, Django Developer, React Developer, Vue.js Developer, Nuxt.js Developer, Next.js Developer, Full Stack Developer, Web Developer, Backend Developer, Frontend Developer, GitHub Expert, GitLab Developer, API Development, Software Engineer, Web Application Development, CI/CD Integration, Git Version Control, Freelance Developer, Remote Developer, Custom Web Development, Hire Web Developer, Modern Web Development' }
  ]
});
const searchQuery = ref('')
const selectedCategory = ref('All')
const imageLoaded = ref(false)

// Get blog categories from portfolio data
const categories = computed(() => {
  const uniqueCategories = new Set(portfolioData.blogPosts?.map(post => post.category?.name).filter(Boolean))
  return ['All', ...uniqueCategories]
})

// Get blog posts directly from portfolio data
const allPosts = computed(() =>
  [...(portfolioData.blogPosts || [])]
    .sort((a, b) => b.someNumericProperty - a.someNumericProperty)
)
const featuredPost = computed(() => allPosts.value[0] || null)
const regularPosts = computed(() => allPosts.value.slice(1))

// Filter posts based on search and category
const filteredPosts = computed(() => {
  let filtered = regularPosts.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    )
  }

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(post => post.category?.name === selectedCategory.value)
  }

  return filtered
})

// Format date helper
const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Animation helpers
const onBeforeEnter = (el) => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(100px)'
}

const onEnter = (el, done) => {
  const delay = el.dataset.index * 100
  setTimeout(() => {
    el.style.transition = 'all 0.5s ease'
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
    setTimeout(done, 500)
  }, delay)
}
const placeholderImage = ref('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxwYXRoIGQ9Ik0zMjAgMjQwaDgwdjgwaC04MHoiIGZpbGw9IiM5Y2EzYWYiLz48cGF0aCBkPSJNNDAwIDI0MGg4MHY4MGgtODB6IiBmaWxsPSIjZDFkNWRiIi8+PHRleHQgeD0iNDAwIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=')

// Handle image errors
const handleImageError = (event) => {
  event.target.src = placeholderImage.value
}
</script>

<style scoped>
.stagger-list-enter-active {
  transition: all 0.5s ease;
}

.stagger-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.stagger-list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>