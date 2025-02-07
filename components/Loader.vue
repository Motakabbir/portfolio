<template>
  <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
    enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div class="relative">
        <!-- Animated logo -->
        <div class="w-24 h-24 relative animate-pulse">
          <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Outer circle -->
            <circle cx="50" cy="50" r="45" class="stroke-primary-600/20 dark:stroke-primary-400/20" stroke-width="6" />
            <!-- Animated arc -->
            <circle cx="50" cy="50" r="45" class="stroke-primary-600 dark:stroke-primary-400" stroke-width="6"
              stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="283">
              <animate attributeName="stroke-dashoffset" values="283;0;283" dur="2s" repeatCount="indefinite"
                keyTimes="0;0.5;1" />
            </circle>
          </svg>
        </div>

        <!-- Loading text -->
        <div class="mt-6 text-center">
          <h2 class="text-xl font-medium text-gray-900 dark:text-white">
            {{ loadingText }}
          </h2>
          <div class="flex items-center justify-center mt-3 space-x-1.5">
            <div v-for="i in 3" :key="i" class="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"
              :style="{ animation: 'bounce 1.4s infinite', 'animation-delay': (i - 1) * 0.16 + 's' }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { isLoading, loadingText } = useLoading()
</script>

<style scoped>
@keyframes bounce {

  0%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-6px);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}
</style>
