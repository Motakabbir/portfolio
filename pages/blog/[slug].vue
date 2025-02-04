<template>
  <div v-if="!currentPost" class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <ExclamationCircleIcon class="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h1 class="text-xl font-medium text-gray-900 mb-2">Blog post not found</h1>
      <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
      <router-link to="/blog" 
                class="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
        Back to Blog
      </router-link>
    </div>
  </div>

  <div v-else class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <section class="relative overflow-hidden py-20 lg:py-24">
      <div v-if="currentPost.backgroundImages?.header" class="absolute inset-0">
        <img :src="currentPost.backgroundImages.header" 
             alt="Header Background"
             class="w-full h-full object-cover opacity-50"
             @error="handleImageError">
        <div class="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
      </div>
      <div v-else class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5"></div>

      <!-- Content -->
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Category -->
          <div v-if="currentPost.category" class="mb-6">
            <span :class="[currentPost.category.color || 'bg-primary-100', 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium']">
              <HashtagIcon class="h-4 w-4 mr-1" />
              {{ currentPost.category.name }}
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" 
              :class="currentPost.backgroundImages?.header ? 'text-white' : 'text-gray-900'">
            {{ currentPost.title }}
          </h1>

          <!-- Author -->
          <div v-if="currentPost.author" class="flex items-center justify-center mb-6">
            <img v-if="currentPost.author.avatar" 
                 :src="currentPost.author.avatar" 
                 :alt="currentPost.author.name"
                 class="h-12 w-12 rounded-full mr-3"
                 @error="handleImageError">
            <UserCircleIcon v-else class="h-12 w-12 text-gray-400 mr-3" />
            <div>
              <div class="text-lg font-medium" :class="currentPost.backgroundImages?.header ? 'text-white' : 'text-gray-900'">
                {{ currentPost.author.name }}
              </div>
              <div class="text-sm" :class="currentPost.backgroundImages?.header ? 'text-gray-200' : 'text-gray-600'">
                {{ currentPost.author.role }}
              </div>
            </div>
          </div>

          <!-- Meta -->
          <div class="flex items-center justify-center space-x-4" 
               :class="currentPost.backgroundImages?.header ? 'text-gray-200' : 'text-gray-600'">
            <span class="flex items-center">
              <CalendarIcon class="h-5 w-5 mr-2" />
              {{ formatDate(currentPost.date) }}
            </span>
            <span class="text-gray-300">•</span>
            <span class="flex items-center">
              <ClockIcon class="h-5 w-5 mr-2" />
              {{ currentPost.readTime }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Cover Image -->
      <div class="rounded-xl overflow-hidden mb-12 bg-gray-100">
        <img v-if="currentPost.coverImage" 
             :src="currentPost.coverImage" 
             :alt="currentPost.title"
             class="w-full h-[400px] object-cover"
             @error="handleImageError">
        <div v-else class="w-full h-[400px] flex items-center justify-center text-gray-400">
          <PhotoIcon class="h-12 w-12" />
        </div>
      </div>

      <!-- Article Content -->
      <article class="prose prose-lg mx-auto">
        <div v-if="currentPost.content" 
             class="markdown-content"
             v-html="markdownToHtml(currentPost.content)"></div>
        <div v-else class="text-gray-600">
          {{ currentPost.excerpt }}
        </div>
      </article>

      <!-- Author Bio -->
      <div v-if="currentPost.author?.bio" class="mt-12 pt-8 border-t">
        <div class="flex items-center gap-4">
          <img v-if="currentPost.author.avatar" 
               :src="currentPost.author.avatar" 
               :alt="currentPost.author.name"
               class="w-16 h-16 rounded-full object-cover"
               @error="handleImageError">
          <UserCircleIcon v-else class="h-16 w-16 text-gray-400" />
          <div>
            <h3 class="font-semibold text-lg">{{ currentPost.author.name }}</h3>
            <p class="text-gray-600">{{ currentPost.author.bio }}</p>
          </div>
        </div>
      </div>

      <!-- Related Posts -->
      <div v-if="relatedPosts.length > 0" class="mt-16 pt-8 border-t">
        <h2 class="text-2xl font-bold mb-8">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <router-link v-for="relatedPost in relatedPosts" 
                   :key="relatedPost.id"
                   :to="'/blog/' + relatedPost.slug"
                   class="group">
            <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img :src="relatedPost.coverImage" 
                   :alt="relatedPost.title"
                   class="w-full h-48 object-cover"
                   @error="handleImageError">
              <div class="p-6">
                <div v-if="relatedPost.category" class="mb-2">
                  <span :class="[relatedPost.category.color || 'bg-primary-100', 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium']">
                    <HashtagIcon class="h-3 w-3 mr-1" />
                    {{ relatedPost.category.name }}
                  </span>
                </div>

                <h3 class="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {{ relatedPost.title }}
                </h3>
                <p class="text-gray-600 text-sm line-clamp-2">{{ relatedPost.excerpt }}</p>

                <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span class="flex items-center">
                    <CalendarIcon class="h-4 w-4 mr-1" />
                    {{ formatDate(relatedPost.date) }}
                  </span>
                  <span class="flex items-center">
                    <ClockIcon class="h-4 w-4 mr-1" />
                    {{ relatedPost.readTime }}
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  ExclamationCircleIcon,
  PhotoIcon,
  UserCircleIcon,
  HashtagIcon
} from '@heroicons/vue/24/outline'
import portfolioData from '@/data/portfolio.json'

const route = useRoute()
const router = useRouter()

// Get current post based on slug with proper type checking
const currentPost = computed(() => {
  const slug = route.params.slug
  if (!slug) return null
  
  // Add null check for blogPosts array
  if (!portfolioData?.blogPosts) return null
  
  const post = portfolioData.blogPosts.find(p => p.slug === slug)
  if (!post) return null

  // Ensure all required properties exist with proper defaults
  return {
    ...post, // spread post properties first
    title: post.title || '',
    slug: post.slug || '',
    content: post.content || '',
    excerpt: post.excerpt || '',
    backgroundImages: post.backgroundImages || {},
    category: post.category || null,
    author: post.author || null,
    readTime: post.readTime || '5 min read',
    date: post.date || new Date().toISOString().split('T')[0],
    tableOfContents: post.tableOfContents || []
  }
})

// Get related posts with proper null checking
const relatedPosts = computed(() => {
  if (!currentPost.value || !portfolioData?.blogPosts) return []
  
  return portfolioData.blogPosts
    .filter(p => 
      p.slug !== currentPost.value.slug && 
      p.category?.name === currentPost.value.category?.name
    )
    .slice(0, 2)
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

// Convert markdown to HTML
const markdownToHtml = (content) => {
  if (!content) return ''
  return content
}

// Handle image errors
const handleImageError = (event) => {
  event.target.src = ref('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxwYXRoIGQ9Ik0zMjAgMjQwaDgwdjgwaC04MHoiIGZpbGw9IiM5Y2EzYWYiLz48cGF0aCBkPSJNNDAwIDI0MGg4MHY4MGgtODB6IiBmaWxsPSIjZDFkNWRiIi8+PHRleHQgeD0iNDAwIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=')
}

// Watch for changes in currentPost and handle navigation
watch(() => route.params.slug, (newSlug) => {
  if (process.client && newSlug && !currentPost.value) {
    router.replace('/blog')
  }
})
</script>

<style>
.prose {
  max-width: none;
}

.prose img {
  border-radius: 0.75rem;
}

.prose pre {
  background-color: #1a1a1a;
  color: #e5e5e5;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.prose code {
  color: #e5e5e5;
  background-color: #1a1a1a;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose pre code {
  padding: 0;
  border-radius: 0;
  background-color: transparent;
}
</style>
