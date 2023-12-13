/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark': '#17171f',
        'main': '#02ffaf',
        'body': '#081B29',
        'select': '#02ffaf',
        'deep':'#15023a',
        'navy':'black',
        'orange':'#ffa600'
        
      },
      fontfamily: {
        'poppins': ["poppins", 'sans-serif']},
        
  },
  plugins: [],
  }}
