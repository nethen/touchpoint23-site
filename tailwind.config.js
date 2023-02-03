/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        murmure:['murmure', 'serif'],
        apfelgrotezk:['apfel-grotezk', 'sans-serif']
      },
      colors:{
        'bg-pink': '#FF00D6'
      },
      fontSize:{
        pabout:['40px','43px'],
        blackbox:['35px', '43px'],
        // about:['21vw'],
        about:['298px','334px']
      }
    },
  },
  plugins: [],
}
