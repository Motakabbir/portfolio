<template>
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Tech Stack
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Technologies and tools I work with
        </p>
      </div>

      <div class="mt-12 space-y-8">
        <!-- Languages -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="lang in techStack.languages" 
               :key="lang.name"
               :href="`https://github.com/topics/${lang.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="lang.badge" :alt="lang.name" />
            </a>
          </div>
        </div>

        <!-- Frameworks -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="framework in techStack.frameworks" 
               :key="framework.name"
               :href="`https://github.com/topics/${framework.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="framework.badge" :alt="framework.name" />
            </a>
          </div>
        </div>

        <!-- Databases -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="db in techStack.databases" 
               :key="db.name"
               :href="`https://github.com/topics/${db.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="db.badge" :alt="db.name" />
            </a>
          </div>
        </div>

        <!-- Cloud -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Cloud & Infrastructure</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="platform in techStack.cloud" 
               :key="platform.name"
               :href="`https://github.com/topics/${platform.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="platform.badge" :alt="platform.name" />
            </a>
          </div>
        </div>

        <!-- DevOps -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">DevOps & CI/CD</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="tool in techStack.devops" 
               :key="tool.name"
               :href="`https://github.com/topics/${tool.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="tool.badge" :alt="tool.name" />
            </a>
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Development Tools</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="tool in techStack.tools" 
               :key="tool.name"
               :href="`https://github.com/topics/${tool.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="tool.badge" :alt="tool.name" />
            </a>
          </div>
        </div>

        <!-- Design -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Design Tools</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="tool in techStack.design" 
               :key="tool.name"
               :href="`https://github.com/topics/${tool.name.toLowerCase()}`"
               target="_blank"
               class="transition-transform hover:scale-110">
              <img :src="tool.badge" :alt="tool.name" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  techStack: {
    type: Object,
    required: true
  }
})
</script>
