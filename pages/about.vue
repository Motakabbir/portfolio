<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Background Texture -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-50"
         style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Profile Section -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-6 md:p-8">
            <div class="relative">
              <img class="w-48 h-48 rounded-xl object-cover mx-auto md:mx-0 shadow-lg" 
                   :src="portfolio.personal.image" 
                   :alt="portfolio.personal.name">
              <div class="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="p-6 md:p-8 md:flex-1">
            <div class="flex items-center justify-between mb-4">
              <h1 class="text-3xl font-bold text-gray-900">{{ portfolio.personal.name }}</h1>
              <div class="flex space-x-3">
                <a v-for="social in portfolio.personal.social" 
                   :key="social.name" 
                   :href="social.url" 
                   :title="social.name"
                   class="text-gray-600 hover:text-primary-600 transition-colors">
                  <span class="sr-only">{{ social.name }}</span>
                  <span v-html="social.icon" class="w-6 h-6"></span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"></svg>
                </a>
              </div>
            </div>
            <p class="text-xl text-gray-600 mb-6">{{ portfolio.personal.bio }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="info in portfolio.personal.quickInfo" 
                   :key="info.type"
                   class="flex items-center p-3 bg-gray-50 rounded-lg">
                <div class="p-2 bg-primary-100 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="info.type === 'email'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    <path v-if="info.type === 'phone'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    <path v-if="info.type === 'languages'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                    <path v-if="info.type === 'experience'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">{{ info.label }}</h3>
                  <p class="text-sm text-gray-600">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Sections -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Certifications -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="text-primary-600 dark:text-primary-400 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"/>
                </svg>
              </span>
              Certifications
            </h2>
            <div class="space-y-6">
              <div v-for="cert in data.certifications" :key="cert.id" 
                   class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                    <img :src="cert.organizationLogo" 
                         :alt="cert.issuer"
                         class="w-12 h-12 object-contain"
                         @error="handleImageError">
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {{ cert.name }}
                    </h3>
                    <p class="text-gray-700 text-sm mt-1">{{ cert.issuer }}</p>
                    <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-6.41V4a1 1 0 10-2 0v6c0 .28.11.53.29.71l4 4a1 1 0 001.42-1.42L11 9.59z"/>
                        </svg>
                        {{ cert.duration }}
                      </span>
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"/>
                        </svg>
                        {{ cert.credentialId }}
                      </span>
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="skill in cert.skills" 
                            :key="skill"
                            class="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="text-primary-600 dark:text-primary-400 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </span>
              Education
            </h2>
            <div class="space-y-6">
              <div v-for="edu in portfolio.education" :key="edu.id"
                   class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                    <img :src="edu.institutionLogo" 
                         :alt="edu.institution"
                         class="w-12 h-12 object-contain rounded-lg"
                         @error="handleImageError">
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start">
                      <div>
                        <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                          {{ edu.degree }}
                        </h3>
                        <p class="text-gray-700">{{ edu.institution }}</p>
                      </div>
                      <div class="text-right">
                        <span class="text-sm text-gray-500">{{ edu.duration }}</span>
                        <p class="text-sm font-medium text-primary-600 mt-1">{{ edu.grade }}</p>
                      </div>
                    </div>

                    <div class="mt-4" v-if="edu.thesis">
                      <h4 class="text-sm font-medium text-gray-700 mb-2">Thesis:</h4>
                      <p class="text-gray-600 text-sm">{{ edu.thesis }}</p>
                    </div>

                    <div class="mt-4" v-if="edu.achievements && edu.achievements.length">
                      <h4 class="text-sm font-medium text-gray-700 mb-2">Key Achievements:</h4>
                      <ul class="space-y-2">
                        <li v-for="(achievement, index) in edu.achievements" 
                            :key="index"
                            class="flex items-start gap-2 text-gray-600 text-sm">
                          <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                          </svg>
                          <span>{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="mt-4 flex flex-wrap gap-2">
                      <span v-for="course in edu.relevantCourses" 
                            :key="course"
                            class="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                        {{ course }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Experience -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="text-primary-600 dark:text-primary-400 mr-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </span>
              Experience
            </h2>
            <div class="space-y-8">
              <div v-for="exp in portfolio.experience" :key="exp.id"
                   class="group relative pl-8">
                <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
                <div class="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                
                <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0">
                      <img :src="exp.companyLogo" 
                           :alt="exp.company"
                           class="w-12 h-12 object-contain rounded-lg"
                           @error="handleImageError">
                    </div>
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <div>
                          <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                            {{ exp.position }}
                          </h3>
                          <p class="text-gray-700">{{ exp.company }}</p>
                        </div>
                        <span class="text-sm text-gray-500">{{ exp.duration }}</span>
                      </div>
                      
                      <div class="mt-4">
                        <h4 class="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
                        <ul class="space-y-2">
                          <li v-for="(resp, index) in exp.responsibilities" 
                              :key="index"
                              class="flex items-start gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                            </svg>
                            <span>{{ resp }}</span>
                          </li>
                        </ul>
                      </div>

                      <div class="mt-4 flex flex-wrap gap-2">
                        <span v-for="tech in exp.technologies" 
                              :key="tech"
                              class="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="text-primary-600 dark:text-primary-400 mr-3">⚡</span>
              Skills
            </h2>
            <div class="space-y-6">
              <div v-for="skillSet in data.skills" :key="skillSet.category">
                <h3 class="font-semibold text-gray-900 mb-3">{{ skillSet.category }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in skillSet.items" :key="skill"
                        class="px-3 py-1 bg-primary-200 dark:bg-primary-800 text-primary-600 dark:text-primary-400 rounded-full text-sm hover:bg-primary-300 dark:hover:bg-primary-700 transition-colors">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import portfolioData from '~/data/portfolio.json'

const handleImageError = (event) => {
  event.target.src = ref('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxwYXRoIGQ9Ik0zMjAgMjQwaDgwdjgwaC04MHoiIGZpbGw9IiM5Y2EzYWYiLz48cGF0aCBkPSJNNDAwIDI0MGg4MHY4MGgtODB6IiBmaWxsPSIjZDFkNWRiIi8+PHRleHQgeD0iNDAwIiB5PSIzNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=')
}

const data = ref({
  ...portfolioData,
  personal: {
    name: "John Doe",
    title: "Senior Software Engineer",
    image: "https://placehold.co/400x400/4f46e5/ffffff?text=JD",
    location: "San Francisco, CA",
    bio: "Passionate software engineer with 7+ years of experience in building scalable web applications and leading development teams. Specialized in full-stack development with a focus on cloud-native solutions and modern JavaScript frameworks.",
    quickInfo: [
      {
        type: "email",
        label: "Email",
        value: "john.doe@example.com"
      },
      {
        type: "phone",
        label: "Phone",
        value: "+1 (555) 123-4567"
      },
      {
        type: "languages",
        label: "Languages",
        value: "English, Spanish, French"
      },
      {
        type: "experience",
        label: "Experience",
        value: "7+ Years"
      }
    ]
  },
  social: [
    { 
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github"
    },
    { 
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin"
    },
    { 
      name: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter"
    }
  ],
  experience: [
    {
      id: 1,
      position: "Senior Software Engineer",
      company: "TechCorp Solutions",
      companyLogo: "https://placehold.co/400x400/4f46e5/ffffff?text=TC",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Led a team of 5 developers in developing and maintaining cloud-native applications using microservices architecture",
        "Implemented CI/CD pipelines that reduced deployment time by 60% and improved code quality",
        "Architected and developed scalable backend services handling 1M+ daily requests",
        "Mentored junior developers and conducted technical interviews for hiring"
      ],
      technologies: ["Node.js", "React", "AWS", "Docker", "Kubernetes", "MongoDB"]
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "InnovateTech Inc",
      companyLogo: "https://placehold.co/400x400/4f46e5/ffffff?text=IT",
      duration: "Jun 2021 - Dec 2022",
      responsibilities: [
        "Developed and maintained multiple web applications using Vue.js and Django",
        "Optimized database queries resulting in 40% improvement in application performance",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with UX designers to implement responsive and accessible interfaces"
      ],
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "AWS", "Nginx"]
    },
    {
      id: 3,
      position: "Software Developer",
      company: "DataFlow Systems",
      companyLogo: "https://placehold.co/400x400/4f46e5/ffffff?text=DS",
      duration: "Aug 2019 - May 2021",
      responsibilities: [
        "Built and maintained data processing pipelines handling 100GB+ daily data",
        "Developed RESTful APIs for internal and external service integration",
        "Implemented automated testing strategies achieving 90% code coverage",
        "Participated in agile ceremonies and contributed to sprint planning"
      ],
      technologies: ["Python", "FastAPI", "Apache Kafka", "ElasticSearch", "Docker"]
    },
    {
      id: 4,
      position: "Junior Developer",
      company: "WebSmart Solutions",
      companyLogo: "https://placehold.co/400x400/4f46e5/ffffff?text=WS",
      duration: "Jan 2018 - Jul 2019",
      responsibilities: [
        "Developed and maintained client websites using modern web technologies",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with the design team to implement pixel-perfect layouts"
      ],
      technologies: ["JavaScript", "React", "PHP", "MySQL", "WordPress", "SASS"]
    }
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      organizationLogo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
      duration: "Valid: 2023 - 2026",
      credentialId: "AWS-ASA-00123456",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      id: 2,
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      organizationLogo: "https://static.scrum.org/web/badges/badge-psmi.svg",
      duration: "No Expiration",
      credentialId: "PSM-123456",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"]
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      organizationLogo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
      duration: "Valid: 2024 - 2026",
      credentialId: "MSFT-DEV-789012",
      skills: ["Azure", "Cloud Development", ".NET", "Microservices"]
    },
    {
      id: 4,
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      organizationLogo: "https://cloud.google.com/certification/images/cloud-architect.png",
      duration: "Valid: 2024 - 2027",
      credentialId: "GCP-ARCH-345678",
      skills: ["GCP", "Cloud Architecture", "Security", "Infrastructure"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      institutionLogo: "https://placehold.co/400x400/4f46e5/ffffff?text=BUBT",
      duration: "2018 - 2022",
      grade: "CGPA: 3.75/4.00",
      thesis: "Design and Development of a Real-Time Object Detection System using Deep Learning",
      achievements: [
        "Recipient of the Dean's List Award for outstanding academic performance",
        "Participated in the 2020 ICPC Dhaka Regional Programming Contest"
      ],
      relevantCourses: ["Data Structures and Algorithms", "Computer Networks", "Database Systems", "Artificial Intelligence", "Machine Learning"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "C++", "TypeScript"]
    },
    {
      category: "Frameworks",
      items: ["React", "Angular", "Vue.js", "Django", "Flask"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure", "Google Cloud", "Heroku", "DigitalOcean"]
    },
    {
      category: "Agile Methodologies",
      items: ["Scrum", "Kanban", "Lean", "Extreme Programming"]
    }
  ]
})

const portfolio = ref({
  personal: {},
  techStack: {
    languages: [],
    frameworks: [],
    devops: []
  },
  projects: [],
  blogPosts: [],
  social:[],
  experience:[],
  certifications:[],
  education:[],
  skills:[]
})

onMounted(async () => {
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
</script>

<style scoped>
.timeline-dot::before {
  content: '';
  @apply absolute left-0 top-1/2 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full -translate-x-1/2;
}
</style>
