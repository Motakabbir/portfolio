<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <!-- Background Texture -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-50"
      style="background-image: url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%236366f1%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Profile Section -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12">
        <div class="md:flex">
          <div class="md:flex-shrink-0 p-6 md:p-8">
            <div class="relative">              
                <NuxtPicture :src="portfolio.personal.image"
                :alt="portfolio.personal.name" class="w-48 h-48 rounded-xl object-cover mx-auto md:mx-0 shadow-lg" />                
              <div class="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

          </div>
          <div class="p-6 md:p-8 md:flex-1">
            <div class="flex items-center justify-between mb-4">
              <p class="text-2xl font-bold text-gray-900 break-words">
                {{ portfolio.personal.name }}
              </p>
              <div class="flex space-x-3 ">
                <a v-for="social in portfolio.personal.social" :key="social.name" :href="social.url"
                  :title="social.name" class="text-gray-600 hover:text-primary-600 transition-colors">
                  <span class="sr-only">{{ social.name }}</span>
                  <span v-html="social.icon" class="w-6 h-6"></span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"></svg>
                </a>
              </div>
            </div>
            <p class="text-xl text-gray-600 mb-6">{{ portfolio.personal.bio }}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="info in portfolio.personal.quickInfo" :key="info.type"
                class="flex items-center p-3 bg-gray-50 rounded-lg">
                <div class="p-2 bg-primary-100 rounded-lg mr-3">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="info.type === 'email'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    <path v-if="info.type === 'phone'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    <path v-if="info.type === 'languages'" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    <path v-if="info.type === 'experience'" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                  <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z" />
                </svg>
              </span>
              Certifications
            </h2>
            <div class="space-y-6">
              <div v-for="cert in data.certifications" :key="cert.id"
                class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">
                      <NuxtPicture :src="cert.organizationLogo" :alt="cert.issuer" class="w-12 h-12 object-contain" />   
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {{ cert.name }}
                    </h3>
                    <p class="text-gray-700 text-sm mt-1">{{ cert.issuer }}</p>
                    <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-6.41V4a1 1 0 10-2 0v6c0 .28.11.53.29.71l4 4a1 1 0 001.42-1.42L11 9.59z" />
                        </svg>
                        {{ cert.duration }}
                      </span>
                      <span class="flex items-center" v-if="cert.credentialId">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" />
                        </svg>
                        {{ cert.credentialId }}
                      </span>
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="skill in cert.skills" :key="skill"
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
                  <path
                    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </span>
              Education
            </h2>
            <div class="space-y-6">
              <div v-for="edu in portfolio.education" :key="edu.id"
                class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0">                   
                    <NuxtPicture :src="edu.institutionLogo" :alt="edu.institution" class="w-12 h-12 object-contain rounded-lg" />   
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
                        <li v-for="(achievement, index) in edu.achievements" :key="index"
                          class="flex items-start gap-2 text-gray-600 text-sm">
                          <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                          </svg>
                          <span>{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>

                    <div class="mt-4 flex flex-wrap gap-2">
                      <span v-for="course in edu.relevantCourses" :key="course"
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
                  <path
                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </span>
              Experience
            </h2>
            <div class="space-y-8">
              <div v-for="exp in portfolio.experience" :key="exp.id" class="group relative pl-8">
                <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
                <div class="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></div>

                <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0">
                      <NuxtPicture :src="exp.companyLogo" :alt="exp.company" class="w-12 h-12 object-contain rounded-lg" />   
                    </div>
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <div>
                          <h3
                            class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-lg">
                            {{ exp.position }}
                          </h3>
                          <p class="text-gray-700">{{ exp.company }}</p>
                        </div>
                        <span class="text-sm text-gray-500">{{ exp.duration }}</span>
                      </div>

                      <div class="mt-4">
                        <h4 class="text-sm font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
                        <ul class="space-y-2">
                          <li v-for="(resp, index) in exp.responsibilities" :key="index"
                            class="flex items-start gap-2 text-gray-600">
                            <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                            </svg>
                            <span>{{ resp }}</span>
                          </li>
                        </ul>
                      </div>

                      <div class="mt-4 flex flex-wrap gap-2">
                        <span v-for="tech in exp.technologies" :key="tech"
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
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-5 mb-5">
        <Skills />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import portfolioData from '~/data/portfolio.json'
import { useHead } from '#imports';
import NuxtPicture from '@/components/NuxtPicture.vue'
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'Experienced Full Stack Developer specializing in PHP, Python, and JavaScript. Expertise in Laravel, CodeIgniter, Django, React, Vue, Nuxt, and Next.js. Skilled in GitHub, GitLab, API development, and modern web technologies. Hire a professional for scalable and high-performance web solutions.' },
    { name: 'keywords', content: 'PHP Developer, Python Developer, JavaScript Developer, Laravel Developer, CodeIgniter Developer, Django Developer, React Developer, Vue.js Developer, Nuxt.js Developer, Next.js Developer, Full Stack Developer, Web Developer, Backend Developer, Frontend Developer, GitHub Expert, GitLab Developer, API Development, Software Engineer, Web Application Development, CI/CD Integration, Git Version Control, Freelance Developer, Remote Developer, Custom Web Development, Hire Web Developer, Modern Web Development' }
  ]
});
const data = ref({
  ...portfolioData,
  certifications: [
    {
      "id": 1,
      "name": "Web App Development - .NET",
      "issuer": "BITM",
      "organizationLogo": "https://media.licdn.com/dms/image/v2/C510BAQGPMCBNhEsY5A/company-logo_200_200/company-logo_200_200/0/1631385280244?e=1747267200&v=beta&t=ZGLKMgJ0ao2Rv0hiwMye1qdEOq0IgWNFGxW-XCmSnQk",
      "duration": "2016 - Never End",
      "credentialId": "G014723",
      "skills": [".NET", "Web Application Development"]
    },
    {
      "id": 2,
      "name": "Web Design",
      "issuer": "Creative IT Institute",
      "organizationLogo": "https://cdn.brandfetch.io/idGg6xx8Nv/w/1000/h/1000/theme/dark/icon.png?c=1bx1741594175099id64Mup7ac6n-vYNYV&t=1728897551947",
      "duration": "2015 - Never End",
      "credentialId": "1540609",
      "skills": ["Web Design", "UI/UX", "HTML", "CSS"]
    },
    {
      "id": 3,
      "name": "PHP & SQL",
      "issuer": "Creative IT Institute",
      "organizationLogo": "https://cdn.brandfetch.io/idGg6xx8Nv/w/1000/h/1000/theme/dark/icon.png?c=1bx1741594175099id64Mup7ac6n-vYNYV&t=1728897551947",
      "duration": "2015 - Never End",
      "credentialId": "",
      "skills": ["PHP", "SQL", "Backend Development"]
    },
    {
      "id": 4,
      "name": "Web Development Certification",
      "issuer": "Bangladesh Computer Council",
      "organizationLogo": "https://media.licdn.com/dms/image/v2/C510BAQE9-2FajxK6GA/company-logo_200_200/company-logo_200_200/0/1630566222005/basis_bd_logo?e=1747267200&v=beta&t=iRdRRcYjkVam9CGzF7dZqmBUc3EYdnTGuyg4La6AxL4",
      "duration": "2017 - Never End",
      "credentialId": "G014723",
      "skills": ["Full-Stack Development", "Database Management", "Web Technologies"]
    },
    {
      "id": 5,
      "name": "OWASP API Security Top 10",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/images/66fb5b06-7caf-4b23-a0c3-d262ba57e3c2/image.png",
      "duration": "Completed: 3/5/24",
      "credentialId": "",
      "skills": ["API Security", "OWASP", "Threat Protection"]
    },
    {
      "id": 6,
      "name": "Securing API Servers",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/images/71296528-e07b-44af-b5cd-7723599793cf/image.png",
      "duration": "Completed: 4/29/24",
      "credentialId": "",
      "skills": ["API Security", "Server Hardening", "Network Security"]
    },
    {
      "id": 7,
      "name": "Gateway Security Best Practices",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/size/160x160/images/c6ede4da-a848-483d-b90f-a5b43dd5e04b/image.png",
      "duration": "Completed: 5/2/24",
      "credentialId": "",
      "skills": ["API Gateway", "Security Best Practices", "Threat Mitigation"]
    },
    {
      "id": 8,
      "name": "API Security Fundamentals",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/size/160x160/images/4f17161c-0357-416f-8507-04f4517b1c2f/image.png",
      "duration": "Completed: 5/6/24",
      "credentialId": "",
      "skills": ["API Security", "Authentication", "Authorization"]
    },
    {
      "id": 9,
      "name": "API Security for Connected Cars and Fleets",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/size/160x160/images/f5ceb8aa-9080-4abb-8fb5-83f2f0c5cbd9/image.png",
      "duration": "Completed: 5/6/24",
      "credentialId": "",
      "skills": ["IoT Security", "API Security", "Automotive Cybersecurity"]
    },
    {
      "id": 10,
      "name": "API Authentication",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/size/160x160/images/c8d189b6-bbf0-43e8-b047-02e81f1cdb0f/image.png",
      "duration": "Completed: 10/1/24",
      "credentialId": "",
      "skills": ["API Authentication", "OAuth", "JWT"]
    },
    {
      "id": 11,
      "name": "API Documentation Best Practices",
      "issuer": "APIsec University",
      "organizationLogo": "https://images.credly.com/size/160x160/images/d45a2a64-2af4-4916-a9da-1bc51fc1219b/image.png",
      "duration": "Completed: 10/6/24",
      "credentialId": "",
      "skills": ["API Documentation", "Best Practices", "Technical Writing"]
    },
    {
      "id": 12,
      "name": "Scrum Fundamentals Certified",
      "issuer": "SCRUMstudy - Accreditation Body for Scrum and Agile",
      "organizationLogo": "https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SFC.png",
      "duration": "Completed: Apr 08, 2023",
      "credentialId": "973180",
      "skills": ["Scrum", "Agile", "Project Management"],
      "certificateUrl": "https://www.scrumstudy.com/certification/verify?type=SFC&number=973180"
    },
    {
      "id": 13,
      "name": "Scrum for Ops and DevOps Fundamentals Certified",
      "issuer": "SCRUMstudy - Accreditation Body for Scrum and Agile",
      "organizationLogo": "https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SODFC.png",
      "duration": "Completed: Mar 20, 2024",
      "credentialId": "1010394",
      "skills": ["Scrum", "Ops", "DevOps", "Agile"],
      "certificateUrl": "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1010394"
    },
    {
      "id": 14,
      "name": "Six Sigma Yellow Belt",
      "issuer": "SCRUMstudy - Accreditation Body for Scrum and Agile",
      "organizationLogo": "https://www.6sigmastudy.com/Images/brand-logo/badge-SSYB.png",
      "duration": "Completed: Oct 01, 2024",
      "credentialId": "1010394",
      "skills": ["Six Sigma", "Process Improvement", "Quality Control"],
      "certificateUrl": "https://www.6sigmastudy.com/certification/verify?type=SSYB&number=896832"
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
  social: [],
  experience: [],
  certifications: [],
  education: [],
  skills: []
})
onMounted(async () => {
  try {
    // Load portfolio data
    portfolio.value = portfolioData
    await new Promise(resolve => setTimeout(resolve, 500))
  } catch (error) {
    console.error('Error loading portfolio data:', error)
  }
})
</script>

<style scoped>
.timeline-dot::before {
  content: '';
  @apply absolute left-0 top-1/2 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full -translate-x-1/2;
}
</style>
