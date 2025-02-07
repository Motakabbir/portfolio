<template>
    <div class="p-6 bg-gray-100 min-h-screen mt-20">
        <h1 class="text-3xl font-bold text-center mb-8">💻 Tech Stack</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="category in skills" :key="category.category" class="p-4 bg-white shadow-lg rounded-2xl">
                <h2 class="text-xl font-semibold mb-4 text-gray-700">{{ category.category }}</h2>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div v-for="skill in category.items" :key="skill"
                        class="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg transition">
                        <img :src="icons[skill]" :alt="skill" class="h-8 w-8">
                        <span class="text-gray-800 font-medium">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    { category: "Programming Languages", items: ["JavaScript", "Python", "Java", "C++", "TypeScript"] },
    { category: "Frameworks", items: ["React", "Angular", "Vue.js", "Django", "Flask"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch"] },
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "Heroku", "DigitalOcean"] },
    { category: "Agile Methodologies", items: ["Scrum", "Kanban", "Lean", "Extreme Programming"] },
];

const icons = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "ElasticSearch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    "Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    "DigitalOcean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    "Scrum": "https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SFC.png",
    "Kanban": "/skills/kanban.png",
    "Lean": "/skills/leaning-tower-of-pisa.png",
    "Extreme Programming": "/skills/programming.png"
};
</script>

<style>
/* Optional: Custom Styling */
</style>