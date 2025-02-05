// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots'
  ],

  css: [
    '@/assets/css/main.css',
    '@/assets/css/animations.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Motakabbir Morshed | Full Stack Developer',
      titleTemplate: '%s | Motakabbir Morshed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Full Stack Developer specializing in Vue.js, Node.js, and modern web technologies' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#000000' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Motakabbir Morshed Portfolio' },
        { property: 'og:title', content: 'Motakabbir Morshed | Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Developer specializing in Vue.js, Node.js, and modern web technologies' },
        { property: 'og:image', content: 'https://mmorshed.me/og-image.jpg' },
        { property: 'og:url', content: 'https://mmorshed.me' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Motakabbir Morshed | Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer specializing in Vue.js, Node.js, and modern web technologies' },
        { name: 'twitter:image', content: 'https://mmorshed.me/og-image.jpg' },
        { name: 'twitter:creator', content: '@yourtwitterhandle' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://mmorshed.me' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    // Optimize server performance
    serverAssets: [{
      baseName: 'public',
      dir: 'public'
    }],
    prerender: {
      //crawlLinks: true,
      routes: ['/']
    }
  },

  routeRules: {
    // Enable gzip compression for all routes
    '/**': {
      headers: {
        'Cache-Control': 'max-age=31536000, public, immutable',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      }
    }
  },

  compatibilityDate: '2025-02-03'
})