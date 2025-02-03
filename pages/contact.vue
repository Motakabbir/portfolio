<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Header Section -->
    <section class="relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <img src="~/assets/images/backgrounds/contact-pattern.svg" 
             alt="Contact Pattern" 
             class="w-full h-full object-cover">
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p class="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto">
            Let's discuss your project or just say hello
          </p>
        </div>
      </div>

      <!-- Bottom gradient -->
      <div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-50"></div>
    </section>

    <!-- Contact Section -->
    <section class="relative -mt-12 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-xl p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"
                       id="name"
                       v-model="form.name"
                       required
                       class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email"
                       id="email"
                       v-model="form.email"
                       required
                       class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text"
                       id="subject"
                       v-model="form.subject"
                       required
                       class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message"
                          v-model="form.message"
                          rows="6"
                          required
                          class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit"
                      class="w-full bg-primary text-white rounded-lg px-6 py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                <span>Send Message</span>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Info Cards -->
            <div class="grid sm:grid-cols-2 gap-6">
              <!-- Email -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo.email.title }}</h3>
                <a :href="'mailto:' + contactInfo.email.address" 
                   class="text-primary hover:text-primary-dark transition-colors">
                  {{ contactInfo.email.address }}
                </a>
                <p class="text-gray-600">{{ contactInfo.email.description }}</p>
              </div>

              <!-- Location -->
              <div class="bg-white rounded-xl shadow-lg p-6">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ contactInfo.location.title }}</h3>
                <p class="text-gray-600">{{ contactInfo.location.address.street }}, {{ contactInfo.location.address.area }}, {{ contactInfo.location.address.city }}, {{ contactInfo.location.address.state }} {{ contactInfo.location.address.zipCode }}</p>
                <p class="text-gray-600">{{ contactInfo.location.hours }}</p>
                <p class="text-gray-600">{{ contactInfo.location.transport.metro }}</p>
                <p class="text-gray-600">{{ contactInfo.location.transport.bus }}</p>
                <p class="text-gray-600">{{ contactInfo.location.transport.parking }}</p>
              </div>
            </div>

            <!-- Social Links -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a v-for="social in contactInfo.social" 
                   :key="social.name"
                   :href="social.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200">
                  <div class="mr-3">
                    <svg v-if="social.name === 'GitHub'" class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    <svg v-if="social.name === 'LinkedIn'" class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <svg v-if="social.name === 'Twitter'" class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <svg v-if="social.name === 'Instagram'" class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-1.38-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">{{ social.name }}</p>
                    <p class="text-sm text-gray-600">{{ social.username }}</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Availability -->
            <div class="bg-white rounded-xl shadow-lg p-6">
              <div class="flex items-center gap-4">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p class="text-gray-600">
                  Currently available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contactInfo = {
  email: {
    title: "Email Me",
    address: "contact@johndoe.dev",
    response: "Within 24 hours",
    description: "For project inquiries and collaborations"
  },
  location: {
    title: "Office Location",
    address: {
      name: "Tech Innovation Hub",
      floor: "12th Floor",
      suite: "Suite 1204",
      street: "123 Silicon Valley Road",
      area: "Innovation District",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105"
    },
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    transport: {
      metro: "Innovation Station (Red & Blue Lines) - 5 min walk",
      bus: "Tech Hub Stop (Lines 10, 25, 45X) - 2 min walk",
      parking: "Underground Parking - First 2 hours free"
    }
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      username: "@johndoe"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      username: "John Doe"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/johndoe",
      username: "@johndoe"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/johndoe.dev",
      username: "@johndoe.dev"
    }
  ]
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    // Reset form after successful submission
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    // Show success message
    alert('Message sent successfully!')
  } catch (error) {
    console.error('Error sending message:', error)
    alert('Error sending message. Please try again.')
  }
}
</script>
