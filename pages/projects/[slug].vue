<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="project">
      <!-- Hero div -->
      <div class="relative h-[60vh] min-h-[400px]">
        <div class="absolute inset-0">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
        </div>
        <div class="absolute inset-0 flex items-center">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-3xl">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary-light mb-4">
                {{ project.category }}
              </span>
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ project.title }}</h1>
              <p class="text-xl text-gray-300 mb-6">{{ project.description }}</p>
              <div class="flex flex-wrap gap-3">
                <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank"
                  class="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
                  <span>View Live Demo</span>
                  <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="#details"
                  class="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-colors">
                  Project Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Stats -->
      <div class="bg-white shadow-lg relative -mt-5 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div v-for="stat in project.stats" :key="stat.label" class="p-6 text-center">
              <div class="text-3xl font-bold text-primary mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div id="details" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Left Column - Main Content -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Overview -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div class="prose max-w-none">
                <p class="text-gray-600">{{ project.longDescription }}</p>
              </div>
            </div>

            <!-- Features -->
            <div class="mt-10 mb-10">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(features, category) in project.features" :key="category"
                  class="bg-white rounded-xl shadow-sm p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ category }}</h3>
                  <ul class="space-y-3">
                    <li v-for="feature in features" :key="feature" class="flex items-start">
                      <svg class="h-5 w-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-600">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Challenges & Solutions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Challenges</h2>
                <ul class="space-y-4">
                  <li v-for="challenge in project.challenges" :key="challenge"
                    class="flex items-start bg-red-50 rounded-lg p-4">
                    <svg class="h-6 w-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span class="text-gray-800">{{ challenge }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Solutions</h2>
                <ul class="space-y-4">
                  <li v-for="solution in project.solutions" :key="solution"
                    class="flex items-start bg-green-50 rounded-lg p-4">
                    <svg class="h-6 w-6 text-green-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-800">{{ solution }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Gallery -->
            <div v-if="project.gallery" class="py-12">
              <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Project Gallery</h2>

              <!-- Masonry Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(image, index) in project.gallery" :key="index"
                  class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  @click="openLightbox(index)">
                  <!-- Image -->
                  <NuxtPicture :src="image" :alt="`${project.title} screenshot ${index + 1}`"
                    class="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-80"></div>

                  <!-- Zoom Icon -->
                  <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="p-3 bg-white/30 backdrop-blur-lg rounded-full">
                      <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Lightbox Modal -->
              <div v-if="lightboxOpen" class="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                <button @click="lightboxOpen = false" class="absolute top-6 right-6 text-white text-3xl"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>

                <!-- Carousel within Lightbox -->
                <div class="relative">
                  <button @click="prevImage"
                    class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>

                  </button>

                  <NuxtPicture :src="project.gallery[currentImage]" class="max-w-4xl max-h-screen object-contain"/>

                  <button @click="nextImage"
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>



          </div>

          <!-- Right Column - Sidebar -->
          <div class="space-y-8">
            <!-- Project Info -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
              <dl class="space-y-3">
                <div>
                  <dt class="text-sm text-gray-500">Client</dt>
                  <dd class="text-gray-900">{{ project.client }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-500">Duration</dt>
                  <dd class="text-gray-900">{{ project.duration }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-500">Completed</dt>
                  <dd class="text-gray-900">{{ project.completionDate }}</dd>
                </div>
              </dl>
            </div>

            <!-- Tech Stack -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div class="space-y-6">
                <div v-for="(stack, category) in project.techStack" :key="category">
                  <h4 class="text-sm font-medium text-gray-500 mb-3 capitalize">{{ category }}</h4>
                  <div class="space-y-2">
                    <div v-for="tech in stack" :key="tech.name" class="flex items-center justify-between">
                      <NuxtPicture class="w-8 h-8 mr-2" :src="tech.icon" :alt="tech.name"/>
                      <span class="text-sm text-gray-500">{{ tech.version }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial -->
            <div v-if="project.testimonial"
              class="bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl shadow-sm p-6">
              <div class="flex flex-col items-center text-center">
                <svg class="w-10 h-10 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <blockquote class="text-lg mb-4">{{ project.testimonial.quote }}</blockquote>
                <cite class="not-italic">
                  <div class="font-semibold">{{ project.testimonial.author }}</div>
                  <div class="text-sm opacity-75">
                    {{ project.testimonial.position }}<br>
                    {{ project.testimonial.institution }}
                  </div>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Navigation -->
      <div class="bg-white border-t">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex justify-between items-center">
            <NuxtLink v-if="prevProject" :to="'/projects/' + prevProject.id"
              class="group flex items-center text-gray-600 hover:text-primary transition-colors">
              <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>{{ prevProject.title }}</span>
            </NuxtLink>
            <div v-else class="w-24"></div>

            <NuxtLink to="/projects" class="text-gray-600 hover:text-primary transition-colors">
              All Projects
            </NuxtLink>

            <NuxtLink v-if="nextProject" :to="'/projects/' + nextProject.id"
              class="group flex items-center text-gray-600 hover:text-primary transition-colors">
              <span>{{ nextProject.title }}</span>
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <div v-else class="w-24"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import portfolioData from '~/data/portfolio.json'
import NuxtPicture from '@/components/NuxtPicture.vue'
const route = useRoute()
const slug = route.params.slug

const project = computed(() => {
  return portfolioData.projects.find(p => p.slug == slug.toString())
})

const prevProject = computed(() => {
  const currentIndex = portfolioData.projects.findIndex(p => p.slug == slug.toString())
  return currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null
})

const nextProject = computed(() => {
  const currentIndex = portfolioData.projects.findIndex(p => p.slug == slug.toString())
  return currentIndex < portfolioData.projects.length - 1 ? portfolioData.projects[currentIndex + 1] : null
})

const lightboxOpen = ref(false);
const currentImage = ref(0);

// Open the lightbox at the selected index
const openLightbox = (index) => {
  currentImage.value = index;
  lightboxOpen.value = true;
};

// Go to the next image in the gallery
const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % project.value.gallery.length;
};

// Go to the previous image in the gallery
const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + project.value.gallery.length) % project.value.gallery.length;
};
</script>
