<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-primary">
              morshed
            </NuxtLink>
          </div>

          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              to="/"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/about'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/services'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              Services
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/projects'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              Projects
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/blog'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center px-1 pt-1 border-b-2"
              :class="[
                $route.path === '/contact'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              ]"
            >
              Contact
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="mobileMenuOpen"
      class="sm:hidden"
    >
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink
          to="/"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/about'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/services'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/projects'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/blog'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block pl-3 pr-4 py-2 border-l-4"
          :class="[
            $route.path === '/contact'
              ? 'border-primary text-primary bg-primary-50'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
          ]"
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
