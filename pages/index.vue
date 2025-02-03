<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Main Content -->
    <main class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section id="home" class="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0">
          <!-- Base gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50"></div>
          
          <!-- SVG Pattern Background -->
          <div class="absolute inset-0 opacity-[0.15]">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
                </pattern>
                <pattern id="circles" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" stroke-width="0.5"/>
                </pattern>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
              <rect width="100" height="100" fill="url(#circles)"/>
              <rect width="100" height="100" fill="url(#dots)"/>
            </svg>
          </div>

          <!-- Accent shapes -->
          <div class="absolute right-0 top-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
          <div class="absolute left-20 bottom-20 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <!-- Decorative elements -->
          <div class="absolute inset-0">
            <div class="absolute top-1/4 right-1/4 w-48 h-48 border border-primary-200 rounded-full"></div>
            <div class="absolute bottom-1/4 left-1/4 w-64 h-64 border border-secondary-200 rounded-full"></div>
            <svg class="absolute left-1/3 top-1/3 w-24 h-24 text-primary-100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            <!-- Left Content -->
            <div class="lg:col-span-7 space-y-8">
              <!-- Header -->
              <div class="space-y-4">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm <span class="text-primary-600">{{ portfolio.personal.name }}</span>
                </h1>
                <h2 class="text-xl sm:text-2xl text-gray-600">{{ portfolio.personal.title }}</h2>
              </div>

              <!-- Bio -->
              <p class="text-lg text-gray-600 max-w-2xl">
                {{ portfolio.personal.bio }}
              </p>

              <!-- Location -->
              <div class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{{ portfolio.personal.location }}</span>
              </div>

              <!-- Stats -->
              <div class="flex gap-8">
                <div>
                  <div class="text-3xl font-bold text-primary-600">{{ portfolio.stats?.experience }}+</div>
                  <div class="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-600">{{ portfolio.stats?.projects }}+</div>
                  <div class="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-primary-600">{{ portfolio.stats?.clients }}+</div>
                  <div class="text-sm text-gray-600">Clients</div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap gap-4">
                <a href="#projects" 
                   class="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  View Projects
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <a href="#contact" 
                   class="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>

            <!-- Right Content: Image & Skills -->
            <div class="lg:col-span-5">
              <div class="relative">
                <!-- Profile Image -->
                <div class="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img :src="portfolio.personal.image" 
                       :alt="portfolio.personal.name"
                       class="w-full h-auto"
                       @error="handleImageError">
                </div>

                <!-- Skills -->
                <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-4">
                  <div class="flex justify-center gap-6">
                    <div v-for="skill in ['Frontend', 'Backend', 'DevOps', 'Mobile']" 
                         :key="skill"
                         class="text-center">
                      <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-primary-50 flex items-center justify-center">
                        <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-600">{{ skill }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<TechStack :techStack="portfolio.techStack" />
      <!-- Projects Section -->
      <section id="projects" class="py-20 relative">
        <!-- Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div class="absolute right-0 top-1/4 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
          <div class="absolute left-1/4 bottom-1/4 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p class="text-gray-600">Explore some of my recent work and creative endeavors</p>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in (portfolio?.projects || []).slice(0, 6)" 
                 :key="project.id"
                 class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              <!-- Project Image -->
              <div class="relative aspect-video overflow-hidden">
                <img :src="project.image" 
                     :alt="project.title"
                     class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                     @error="handleImageError">
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Project Info -->
              <div class="p-6">
                <!-- Title and Type -->
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {{ project.title }}
                    </h3>
                    <span class="px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
                      {{ project.type }}
                    </span>
                  </div>
                  <p class="text-gray-600 line-clamp-2">{{ project.description }}</p>
                </div>

                <!-- Tech Stack -->
                <div class="mb-4">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" 
                          :key="tech"
                          class="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-md">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Links -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div class="flex items-center text-sm text-gray-500">
                    <CalendarIcon class="w-4 h-4 mr-1"/>
                    <span>{{ formatDate(project.date) }}</span>
                  </div>
                  <div class="flex gap-3">
                    <a v-if="project.demo" 
                       :href="project.demo"
                       target="_blank"
                       class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                      <span>Live Demo</span>
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                    <a v-if="project.github" 
                       :href="project.github"
                       target="_blank"
                       class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                      <span>Code</span>
                      <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- View More Button -->
          <div class="text-center mt-12">
            <router-link to="/projects" 
                        class="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
              View All Projects
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Blog Section -->
      <section id="blog" class="py-20 relative">
        <!-- Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div class="absolute right-1/4 top-1/4 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
          <div class="absolute left-1/3 bottom-1/3 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p class="text-gray-600">Insights, tutorials, and thoughts on development and design</p>
          </div>

          <!-- Blog Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="post in blogPosts" 
                 :key="post.id"
                 class="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              
              <!-- Post Image -->
              <div class="relative aspect-[16/10] overflow-hidden">
                <img :src="post.image" 
                     :alt="post.title"
                     class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                     @error="handleImageError">
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 text-sm font-medium text-white bg-primary-600/90 backdrop-blur-sm rounded-full">
                    {{ post.category }}
                  </span>
                </div>
              </div>

              <!-- Post Content -->
              <div class="p-6">
                <!-- Meta Info -->
                <div class="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div class="flex items-center">
                    <CalendarIcon class="w-4 h-4 mr-1"/>
                    <span>{{ formatDate(post.date) }}</span>
                  </div>
                  <div class="flex items-center">
                    <ClockIcon class="w-4 h-4 mr-1"/>
                    <span>{{ post.readTime }} min read</span>
                  </div>
                </div>

                <!-- Title and Excerpt -->
                <div class="mb-4">
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 line-clamp-3">{{ post.excerpt }}</p>
                </div>

                <!-- Tags -->
                <div class="mb-6">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in post.tags" 
                          :key="tag"
                          class="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded-md">
                      #{{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Author and Read More -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <!-- Author -->
                  <div class="flex items-center gap-3">
                    <img :src="post.author?.avatar" 
                         :alt="post.author?.name"
                         class="w-8 h-8 rounded-full object-cover"
                         @error="handleImageError">
                    <div class="text-sm">
                      <div class="font-medium text-gray-900">{{ post.author?.name }}</div>
                      <div class="text-gray-500">{{ post.author?.role }}</div>
                    </div>
                  </div>

                  <!-- Read More Link -->
                  <router-link :to="'/blog/' + post.slug" 
                             class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                    Read More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- View All Posts Button -->
          <div class="text-center mt-12">
            <router-link to="/blog" 
                        class="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
              View All Posts
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>

          <!-- Newsletter Subscription -->
          <div class="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12">
            <div class="max-w-2xl mx-auto text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p class="text-gray-600 mb-6">Get notified about new articles, tutorials, and tech insights.</p>
              
              <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" 
                       v-model="newsletterEmail"
                       placeholder="Enter your email"
                       class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <button type="submit"
                        class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer with Social Links -->  
     <!-- Footer with Social Links -->
    <footer class="bg-white border-t border-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center space-y-6">          
          <div class="flex flex-wrap justify-center gap-4">
            <a v-if="portfolio?.personal?.social?.github" 
               :href="portfolio.personal.social.github"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">GitHub</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.linkedin"
               :href="portfolio.personal.social.linkedin"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.twitter"
               :href="portfolio.personal.social.twitter"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">Twitter</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.facebook"
               :href="portfolio.personal.social.facebook"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">Facebook</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.instagram"
               :href="portfolio.personal.social.instagram"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">Instagram</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.youtube"
               :href="portfolio.personal.social.youtube"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">YouTube</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a v-if="portfolio?.personal?.social?.medium"
               :href="portfolio.personal.social.medium"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-primary-600 transition-colors p-2">
              <span class="sr-only">Medium</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
          
        </div>
      </div>
    </footer>  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CalendarIcon, ClockIcon } from '@heroicons/vue/24/outline'
import portfolioData from '@/data/portfolio.json'
import { useLoading } from '@/composables/useLoading'
import TechStack from '@/components/TechStack.vue'

const portfolio = ref({
  personal: {},
  techStack: {
    languages: [],
    frameworks: [],
    devops: []
  },
  projects: [],
  blogPosts: []
})
const { start, finish } = useLoading()

// Base64 placeholder image
const placeholderImage = ref('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxwYXRoIGQ9Ik0zMjAgMjQwaDgwdjgwaC04MHoiIGZpbGw9IiM5Y2EzYWYiLz48cGF0aCBkPSJNNDAwIDI0MGg4MHY4MGgtODB6IiBmaWxsPSIjZDFkNWRiIi8+PHRleHQgeD0iNDAwIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=')

const blogPosts = ref([
  {
    id: 1,
    title: 'Getting Started with Vue.js 3',
    excerpt: 'Learn the fundamentals of Vue.js 3 and build your first application with the Composition API.',
    image: '/images/blog/vue-3.jpg',
    category: 'Vue.js',
    date: '2025-01-15',
    readTime: '5',
    tags: ['Vue.js', 'JavaScript', 'Web Development'],
    author: {
      name: 'John Doe',
      role: 'Frontend Developer',
      avatar: '/images/avatars/john.jpg'
    },
    slug: 'getting-started-with-vue-js-3'
  },
  {
    id: 2,
    title: 'Modern CSS Techniques',
    excerpt: 'Explore modern CSS features like Grid, Flexbox, and Custom Properties to create responsive layouts.',
    image: '/images/blog/css.jpg',
    category: 'CSS',
    date: '2025-01-20',
    readTime: '4',
    tags: ['CSS', 'Web Design', 'Responsive'],
    author: {
      name: 'Jane Smith',
      role: 'UI Designer',
      avatar: '/images/avatars/jane.jpg'
    },
    slug: 'modern-css-techniques'
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    excerpt: 'Learn essential TypeScript patterns and practices for building scalable applications.',
    image: '/images/blog/typescript.jpg',
    category: 'TypeScript',
    date: '2025-01-25',
    readTime: '6',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    author: {
      name: 'Mike Johnson',
      role: 'Software Engineer',
      avatar: '/images/avatars/mike.jpg'
    },
    slug: 'typescript-best-practices'
  }
])

const newsletterEmail = ref('')

onMounted(async () => {
  start('Loading portfolio data...')
  try {
    // Load portfolio data
    portfolio.value = portfolioData
    await new Promise(resolve => setTimeout(resolve, 500))
  } catch (error) {
    console.error('Error loading portfolio data:', error)
  } finally {
    finish()
  }
})

function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function handleImageError(event) {
  event.target.src = placeholderImage.value
}

async function subscribeNewsletter() {
  if (newsletterEmail.value) {
    // Implement newsletter subscription logic
    console.log('Subscribing:', newsletterEmail.value)
    newsletterEmail.value = ''
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Star Animation */
.stars-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Slow Spin Animation */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}

/* Tech Icons Positioning and Animation */
.tech-icon {
  animation: float 3s ease-in-out infinite;
}

.tech-icon-1 {
  top: 10%;
  left: 0;
  animation-delay: 0s;
}

.tech-icon-2 {
  top: 80%;
  left: 10%;
  animation-delay: 0.5s;
}

.tech-icon-3 {
  top: 15%;
  right: 5%;
  animation-delay: 1s;
}

.tech-icon-4 {
  top: 70%;
  right: -5%;
  animation-delay: 1.5s;
}

.prose {
  max-width: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Responsive container for better readability on ultra-wide screens */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1440px;
  }
}

/* Adjust background pattern size for different screens */
@media (max-width: 768px) {
  .animate-pattern {
    background-size: 400px 400px !important;
  }
}

/* Improve text readability */
@media (max-width: 640px) {
  .prose p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
