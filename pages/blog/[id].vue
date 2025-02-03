<template>
  <div v-if="!post" class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-xl font-medium text-gray-900 mb-2">Blog post not found</h1>
      <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
      <router-link to="/blog" 
                class="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
        Back to Blog
      </router-link>
    </div>
  </div>

  <div v-else class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header Section -->
    <section class="relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <img src="~/assets/images/backgrounds/blog-pattern.svg" 
             alt="Blog Pattern" 
             class="w-full h-full object-cover opacity-75">
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <div v-if="post.category" class="flex items-center justify-center gap-2 mb-6">
            <span class="px-3 py-1 rounded-full text-sm font-medium" 
                  :class="post.category.color || 'bg-primary-500'">
              {{ post.category.name }}
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">{{ post.title }}</h1>
          <div class="flex items-center justify-center space-x-4 text-primary-200">
            <div class="flex items-center">
              <CalendarIcon class="w-5 h-5 mr-2" />
              <span>{{ formatDate(post.date) }}</span>
            </div>
            <span>•</span>
            <div class="flex items-center">
              <ClockIcon class="w-5 h-5 mr-2" />
              <span>{{ post.readTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom gradient -->
      <div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-50"></div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Article Content -->
        <article class="lg:col-span-8 space-y-8">
          <!-- Table of Contents -->
          <div v-if="post.tableOfContents?.length" class="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Table of Contents</h2>
            <nav>
              <ul class="space-y-3">
                <li v-for="item in post.tableOfContents" 
                    :key="item.id"
                    :class="{ 'ml-4': item.level === 2 }">
                  <router-link :href="'#' + item.id" 
                     class="text-gray-600 hover:text-primary transition-colors">
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Content Sections -->
          <div v-for="section in post.sections" 
               :key="section.id"
               :id="section.id"
               class="prose prose-lg max-w-none">
            <h2>{{ section.title }}</h2>
            <p>{{ section.content }}</p>
            
            <!-- Code Snippet -->
            <div v-if="section.code" 
                 class="relative bg-gray-900 rounded-xl overflow-hidden">
              <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
                <span class="text-sm text-gray-400">{{ section.code.language }}</span>
                <button class="text-gray-400 hover:text-white transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <pre class="p-4 text-sm text-gray-300 overflow-x-auto"><code>{{ section.code.snippet }}</code></pre>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 py-6">
            <router-link v-for="tag in post.tags" 
                     :key="tag.slug"
                     :to="'/blog/tag/' + tag.slug"
                     class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              #{{ tag.name }}
            </router-link>
          </div>

          <!-- Social Share -->
          <div class="border-t border-b border-gray-200 py-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <span class="text-gray-600">Share this article:</span>
                <div class="flex gap-2">
                  <button v-for="platform in ['twitter', 'facebook', 'linkedin']" 
                          :key="platform"
                          class="p-2 text-gray-500 hover:text-primary transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <!-- Add appropriate social media icon paths -->
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-4 text-gray-600">
                <span class="flex items-center">
                  <svg class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ post.likes }}
                </span>
              </div>
            </div>
          </div>

          <!-- Author Bio -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-start gap-6">
              <img :src="post.author.avatar" 
                   :alt="post.author.name"
                   class="w-16 h-16 rounded-full">
              <div>
                <h3 class="text-lg font-semibold mb-2">About {{ post.author.name }}</h3>
                <p class="text-gray-600 mb-4">{{ post.author.bio }}</p>
                <div class="flex gap-4">
                  <a v-for="(url, platform) in post.author.social" 
                     :key="platform"
                     :href="url"
                     target="_blank"
                     class="text-gray-500 hover:text-primary transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <!-- Add appropriate social media icon paths -->
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Comments -->
          <div class="space-y-6">
            <h2 class="text-2xl font-bold">Comments</h2>
            <div v-for="comment in post.comments" 
                 :key="comment.id"
                 class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex items-start gap-4">
                <img :src="comment.author.avatar" 
                     :alt="comment.author.name"
                     class="w-10 h-10 rounded-full">
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-medium">{{ comment.author.name }}</span>
                    <span class="text-sm text-gray-500">{{ formatDate(comment.publishedAt) }}</span>
                  </div>
                  <p class="text-gray-600">{{ comment.content }}</p>
                  <div class="mt-3 flex items-center gap-4">
                    <button class="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {{ comment.likes }}
                    </button>
                    <button class="text-gray-500 hover:text-primary transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-8">
          <!-- Related Posts -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-semibold mb-4">Related Articles</h3>
            <div class="space-y-4">
              <router-link v-for="relatedPost in post.relatedPosts" 
                       :key="relatedPost.id"
                       :to="'/blog/' + relatedPost.slug"
                       class="block group">
                <h4 class="text-gray-900 group-hover:text-primary transition-colors">
                  {{ relatedPost.title }}
                </h4>
              </router-link>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
            <p class="text-white/80 mb-4">Get the latest articles and insights directly in your inbox.</p>
            <form @submit.prevent class="space-y-3">
              <input type="email" 
                     placeholder="Enter your email"
                     class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50">
              <button type="submit"
                      class="w-full px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>

    <!-- Next/Prev Navigation -->
    <div class="bg-white border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center">
          <router-link v-if="prevPost" 
                   :to="'/blog/' + prevPost.slug"
                   class="group flex items-center text-gray-600 hover:text-primary transition-colors">
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous Article</span>
          </router-link>
          <div v-else class="w-24"></div>

          <router-link to="/blog"
                   class="text-gray-600 hover:text-primary transition-colors">
            All Articles
          </router-link>

          <router-link v-if="nextPost" 
                   :to="'/blog/' + nextPost.slug"
                   class="group flex items-center text-gray-600 hover:text-primary transition-colors">
            <span>Next Article</span>
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
          <div v-else class="w-24"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  CalendarIcon, 
  ClockIcon,
  UserCircleIcon,
  PhotoIcon
} from '@heroicons/vue/24/outline'
import portfolioData from '~/data/portfolio.json'

const route = useRoute()
const router = useRouter()

const postId = computed(() => {
  const id = route.params.id
  return id ? id.toString() : null
})

const post = computed(() => {
  if (!postId.value || !portfolioData?.blogPosts) return null

  const foundPost = portfolioData.blogPosts.find(p => p.id === postId.value)
  if (!foundPost) return null

  return {
    ...foundPost,
    content: foundPost.content || '',
    excerpt: foundPost.excerpt || '',
    backgroundImages: foundPost.backgroundImages || {},
    category: foundPost.category || null,
    author: foundPost.author || null,
    readTime: foundPost.readTime || '5 min read',
    date: foundPost.date || new Date().toISOString().split('T')[0],
    tableOfContents: foundPost.tableOfContents || []
  }
})

const relatedPosts = computed(() => {
  if (!post.value || !portfolioData?.blogPosts) return []
  
  return portfolioData.blogPosts
    .filter(p => p.id !== postId.value)
    .filter(p => p.category?.slug === post.value?.category?.slug)
    .slice(0, 3)
})

const prevPost = computed(() => {
  if (!postId.value || !portfolioData?.blogPosts) return null
  
  const currentIndex = portfolioData.blogPosts.findIndex(p => p.id === postId.value)
  return currentIndex > 0 ? portfolioData.blogPosts[currentIndex - 1] : null
})

const nextPost = computed(() => {
  if (!postId.value || !portfolioData?.blogPosts) return null
  
  const currentIndex = portfolioData.blogPosts.findIndex(p => p.id === postId.value)
  return currentIndex < portfolioData.blogPosts.length - 1 ? portfolioData.blogPosts[currentIndex + 1] : null
})

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
.prose {
  max-width: none;
}
.prose pre {
  margin: 0;
}
</style>
