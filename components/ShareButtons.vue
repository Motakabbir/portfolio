<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <h3 class="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
    <div class="flex items-center space-x-4">
      <!-- Twitter/X -->
      <a :href="getShareUrl('twitter')" 
         target="_blank" 
         rel="noopener noreferrer"
         class="text-gray-600 hover:text-blue-400 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a :href="getShareUrl('linkedin')" 
         target="_blank" 
         rel="noopener noreferrer"
         class="text-gray-600 hover:text-blue-600 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      <!-- Facebook -->
      <a :href="getShareUrl('facebook')" 
         target="_blank" 
         rel="noopener noreferrer"
         class="text-gray-600 hover:text-blue-800 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      <!-- Copy Link -->
      <button @click="copyPageUrl" 
              class="text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
              :class="{ 'text-green-600': copied }"
              :title="copied ? 'Copied!' : 'Copy link'">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const getShareUrl = (platform) => {
  const encodedUrl = encodeURIComponent(props.url)
  const encodedTitle = encodeURIComponent(props.title)
  const via = 'Motakabbir16279' // Your Twitter handle without @

  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${via}`
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    default:
      return '#'
  }
}

const copyPageUrl = () => {
  navigator.clipboard.writeText(props.url)
    .then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    })
    .catch(err => {
      console.error('Failed to copy URL:', err)
    })
}
</script>
