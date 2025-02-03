<template>
  <section class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Blog
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Sharing knowledge and experiences
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="post in blogPosts" :key="post.id" 
             class="flex flex-col bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48">
            <img :src="post.image" :alt="post.title" 
                 class="w-full h-full object-cover" />
            <div v-if="post.featured" 
                 class="absolute top-0 left-0 mt-2 ml-2">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm">
                Featured
              </span>
            </div>
          </div>
          
          <div class="flex-1 p-6">
            <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <span>{{ formatDate(post.date) }}</span>
              <span>•</span>
              <span>{{ post.readTime }} min read</span>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in post.tags" :key="tag"
                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {{ tag }}
              </span>
            </div>
          </div>
          
          <div class="px-6 py-4 border-t border-gray-100">
            <div class="flex items-center space-x-3">
              <img :src="post.author.avatar" :alt="post.author.name"
                   class="h-10 w-10 rounded-full" />
              <div>
                <p class="text-sm font-medium text-gray-900">
                  {{ post.author.name }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ post.author.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blogPosts: {
    type: Array,
    required: true
  }
})

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
