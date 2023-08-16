/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'project-item': '0px 0px 10px rgba(0, 0, 0, 0.15)'
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'background': '#eff6ff',
        'project-blue': '#e7e7f8',
        'project-register' : '#d8daf0',
        'login' : '#c3c7ee',
        'project-bg' : '#ebebfb',
      },
    },
  },
  plugins: [],
}

