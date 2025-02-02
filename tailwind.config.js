/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        'corten': '#f18a4d', // Matching your logo color
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 