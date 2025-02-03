<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Some of my notable projects and achievements
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-48">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-full object-cover" />
            <div class="absolute top-0 right-0 mt-2 mr-2">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm">
                {{ project.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li v-for="highlight in project.highlights" :key="highlight">
                  {{ highlight }}
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>
