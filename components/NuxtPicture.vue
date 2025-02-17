<template>
    <div>
        <NuxtImg :src="validSrc" :alt="alt" format="webp" quality="85" loading="lazy" :class="class"
            @error="handleError" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    src: {
        type: String,
        default: null,
    },
    alt: {
        type: String,
        default: "Default alt text",
    },
    class: {
        type: String,
        default: "",
    },
});

const fallbackImage = "/images/fallback.jpg"; // Provide a valid fallback image path
const validSrc = ref(props.src || fallbackImage);

const handleError = () => {
    validSrc.value = fallbackImage; // Set fallback image when error occurs
};

// Watch for prop changes to update validSrc dynamically
watch(() => props.src, (newSrc) => {
    validSrc.value = newSrc || fallbackImage;
});
</script>