<template>
  <script type="application/ld+json">
    {{ schema }}
  </script>
</template>

<script setup lang="ts">
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Motakabbir Morshed',
  url: 'https://mmorshed.me',
  image: 'https://mmorshed.me/profile-image.jpg',
  sameAs: [
    'https://github.com/yourgithub',
    'https://linkedin.com/in/yourlinkedin',
    'https://twitter.com/yourtwitter'
  ],
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Your Company Name'
  },
  description: 'Full Stack Developer specializing in Vue.js, Node.js, and modern web technologies.',
  skills: [
    'Vue.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Nuxt.js',
    'Full Stack Development'
  ]
}
</script>
