/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'home-background' : "url('frontend\\public\\homeBackground.png')",
      },
      fontFamily : {
        'inter' : 'Inter, sans-serif',
        'tinos' : 'Tinos, serif',
      }
    },
  },
  plugins: [],
}

