<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="text-center">
            <ExclamationCircleIcon class="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 class="text-xl font-medium text-gray-900 mb-2">Blog post not found</h1>
            <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <router-link to="/blog"
                class="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                Back to Blog
            </router-link>
        </div>
    </div>
</template>