/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  safelist: [
    "bg-indigo-500", "bg-blue-500", "bg-sky-500", "bg-green-500", "bg-red-500",
    "bg-purple-500", "bg-yellow-500", "bg-gray-500", "bg-orange-500", "bg-teal-500",
    "bg-pink-500", "bg-cyan-500", "bg-lime-500", "bg-rose-500", "bg-emerald-500",
    "bg-indigo-600", "bg-blue-400", "bg-green-600", "bg-yellow-600", "bg-orange-600",
    "bg-gray-600", "bg-purple-600", "bg-teal-600", "bg-rose-600", "bg-pink-600",
    "bg-cyan-600", "bg-lime-600", "bg-red-600", "bg-amber-600"
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
