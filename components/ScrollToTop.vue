<template>
    <button v-if="showButton" @click="scrollToTop"
        class="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition z-15">
        ↑
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

const checkScrollPosition = () => {
    if (window.scrollY > 300) {
        showButton.value = true
    } else {
        showButton.value = false
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
button {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>