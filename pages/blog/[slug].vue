<template>
  <div class="min-h-screen bg-gray-50">
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
      <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img v-if="post.coverImage" :src="post.coverImage" :alt="post.title" @error="handleImageError"
            class="w-full h-full object-cover opacity-30" />
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div v-if="post.category" class="flex items-center justify-center gap-2 mb-6">
              <span class="px-3 py-1 rounded-full text-sm font-medium text-white"
                :class="post.category.color || 'bg-primary-500'">
                {{ post.category.name }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">{{ post.title }}</h1>
            <div class="flex items-center justify-center space-x-4 text-gray-300">
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
                <ul class="space-y-2">
                  <li v-for="item in post.tableOfContents" :key="item.id" class="text-gray-600 hover:text-primary-600">
                    <a :href="`#${item.id}`" class="block py-1">{{ item.title }}</a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Content Sections -->
            <div class="bg-white rounded-xl shadow-sm p-8">
              <!-- Main Content -->
              <div v-if="post.content" class="prose prose-lg max-w-none mb-8">
                <!-- Image Gallery -->
                <div v-if="post.images?.length" class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div v-for="image in post.images" :key="image.id" class="relative aspect-[4/3] group cursor-pointer"
                    @click="openImage(image)">
                    <img :src="image.url" :alt="image.caption || ''" @error="handleImageError"
                      class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" />
                    <div v-if="image.caption"
                      class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                      <p class="text-white text-sm">{{ image.caption }}</p>
                    </div>
                  </div>
                </div>
                <!-- Post Content -->
                <div v-html="post.content"></div>
              </div>

              <!-- Sections if available -->
              <template v-if="post.sections">
                <div v-for="section in post.sections" :key="section.id" :id="section.id" class="mb-12">
                  <!-- Section Title -->
                  <h2 v-if="section.title" class="text-2xl font-bold mb-4">{{ section.title }}</h2>

                  <!-- Section Images with Superposition -->
                  <div v-if="section.images?.length" class="relative mb-8">
                    <div class="aspect-video relative">
                      <template v-for="(image, index) in section.images" :key="index">
                        <div :class="[
                          'absolute inset-0 transition-all duration-300',
                          index === 0 ? 'z-10' : 'z-20 opacity-0 hover:opacity-100'
                        ]">
                          <img :src="image.url" :alt="image.caption || section.title" @error="handleImageError"
                            class="w-full h-full object-cover rounded-xl" />
                          <div v-if="image.caption"
                            class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
                            <p class="text-white text-sm">{{ image.caption }}</p>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>

                  <!-- Section Content -->
                  <div v-if="section.content" class="prose prose-lg max-w-none" v-html="section.content"></div>

                  <!-- Code Snippet -->
                  <div v-if="section.code" class="relative bg-gray-900 rounded-xl overflow-hidden mt-4">
                    <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
                      <span class="text-sm text-gray-400">{{ section.code.language }}</span>
                      <button @click="copyCode(section.code.snippet)"
                        class="text-gray-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                    <pre class="p-4 text-sm text-gray-300 overflow-x-auto"><code>{{ section.code.snippet }}</code></pre>
                  </div>
                </div>
              </template>

              <!-- Share Buttons -->
              <ShareButtons :url="`https://mmorshed.me/blog/${post.slug}`" :title="post.title" class="mt-8" />

              <!-- Tags -->
              <div v-if="post.tags?.length" class="mt-8">
                <div class="flex flex-wrap gap-2">
                  <router-link v-for="tag in post.tags" :key="tag" :to="`/blog/tag/${tag}`"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    #{{ tag }}
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Author Bio -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <div class="flex items-start gap-6">
                <img :src="post.author?.avatar || '/images/default-avatar.png'" :alt="post.author?.name || 'Author'"
                  @error="handleImageError" class="w-16 h-16 rounded-full">
                <div>
                  <h3 class="text-lg font-semibold mb-2">{{ post.author?.name || 'Anonymous' }}</h3>
                  <p class="text-gray-600 mb-4">{{ post.author?.bio || 'No bio available' }}</p>
                  <div class="flex gap-4">
                    <a v-if="post.author?.twitter" :href="post.author.twitter" target="_blank" rel="noopener noreferrer"
                      class="text-gray-500 hover:text-blue-400">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a v-if="post.author?.github" :href="post.author.github" target="_blank" rel="noopener noreferrer"
                      class="text-gray-500 hover:text-gray-900">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a v-if="post.author?.linkedin" :href="post.author.linkedin" target="_blank"
                      rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-8">
            <!-- Related Posts -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h2 class="text-xl font-bold mb-4">Related Articles</h2>
              <div class="space-y-6">
                <article v-for="relatedPost in relatedPosts" :key="relatedPost.id" class="group">
                  <router-link :to="`/blog/${relatedPost.id}`" class="block space-y-3">
                    <!-- Image -->
                    <div class="aspect-video overflow-hidden rounded-lg">
                      <img :src="relatedPost.coverImage" :alt="relatedPost.title" @error="handleImageError"
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    </div>

                    <!-- Content -->
                    <div>
                      <span v-if="relatedPost.category" :class="relatedPost.category.color || 'bg-primary-500'"
                        class="inline-block px-2 py-1 text-xs text-white rounded-full mb-2">
                        {{ relatedPost.category.name }}
                      </span>
                      <h3
                        class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {{ relatedPost.title }}
                      </h3>
                      <p class="text-sm text-gray-600 mt-1 line-clamp-2">
                        {{ relatedPost.excerpt }}
                      </p>
                      <div class="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                        <span class="flex items-center">
                          <CalendarIcon class="w-4 h-4 mr-1" />
                          {{ formatDate(relatedPost.date) }}
                        </span>
                        <span class="flex items-center">
                          <ClockIcon class="w-4 h-4 mr-1" />
                          {{ relatedPost.readTime }}
                        </span>
                      </div>
                    </div>
                  </router-link>
                </article>
              </div>
            </div>

            <!-- Newsletter -->
            <Newsletter />

            <!-- Categories -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h2 class="text-xl font-bold mb-4">Categories</h2>
              <div class="space-y-2">
                <router-link v-for="category in portfolioData.blogCategories" :key="category.slug"
                  :to="`/blog/category/${category.name}`"
                  class="flex items-center justify-between group p-2 rounded-lg hover:bg-gray-50">
                  <span class="text-gray-700 group-hover:text-primary-600">{{ category.name }}</span>
                  <span :class="category.color || 'bg-primary-500'" class="px-2 py-1 text-xs text-white rounded-full">
                    {{ getCategoryCount(category.name) }}
                  </span>
                </router-link>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <!-- Next/Prev Navigation -->
      <div class="bg-white border-t">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex justify-between items-center">
            <router-link v-if="prevPost" :to="'/blog/' + prevPost.id"
              class="group flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous Article</span>
            </router-link>
            <div v-else class="w-24"></div>

            <router-link to="/blog" class="text-gray-600 hover:text-primary transition-colors">
              All Articles
            </router-link>

            <router-link v-if="nextPost" :to="'/blog/' + nextPost.id"
              class="group flex items-center text-gray-600 hover:text-primary transition-colors">
              <span>Next Article</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
            <div v-else class="w-24"></div>
          </div>
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
import ShareButtons from '~/components/ShareButtons.vue'
import Newsletter from '~/components/Newsletter.vue'
import portfolioData from '~/data/portfolio.json'

const route = useRoute()
const slug = route.params.slug
const post = computed(() => {
  if (!portfolioData?.blogPosts) return null
  const post = portfolioData.blogPosts.find(p => p.slug == slug)
  if (!post) return null
  return post
})

const prevPost = computed(() => {
  const currentIndex = portfolioData.blogPosts.findIndex(p => p.slug == slug)
  return currentIndex > 0 ? portfolioData.blogPosts[currentIndex - 1] : null
})

const nextPost = computed(() => {
  const currentIndex = portfolioData.blogPosts.findIndex(p => p.slug == slug)
  return currentIndex < portfolioData.blogPosts.length - 1 ? portfolioData.blogPosts[currentIndex + 1] : null
})



// Get related posts with proper null checking
const relatedPosts = computed(() => {
  if (!post.value || !portfolioData?.blogPosts) return []

  return portfolioData.blogPosts
    .filter(p =>
      p.slug !== post.value.slug &&
      p.category?.name === post.value.category?.name
    )
    .slice(0, 2)
})

const handleImageError = (event) => {
  event.target.src = '/images/placeholder.svg'
}

const copyCode = (code) => {
  navigator.clipboard.writeText(code)
    .then(() => {
      // Show success notification
      console.log('Code copied!')
    })
    .catch(err => {
      console.error('Failed to copy code:', err)
    })
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const openImage = (image) => {
  if (image?.url) {
    window.open(image.url, '_blank')
  }
}
// Function to get category count
const getCategoryCount = (categoryName) => {
  return portfolioData.blogPosts.filter((post) => post.category.name == categoryName).length;
};

// Example computed property to display category counts
const categoryCounts = computed(() => {
  const counts = {};
  portfolioData.blogPosts.forEach((post) => {
    const categoryName = post.category.name;
    counts[categoryName] = (counts[categoryName] || 0) + 1;
  });
  return counts;
});
</script>

<style>
.prose {
  max-width: none;
}

.prose pre {
  margin: 0;
}
</style>
