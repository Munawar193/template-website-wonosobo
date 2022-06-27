/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2F5D62',
        secondary : '#4E4E4E',
        dark : '#0f172a',
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/dist/bg.png')",
    }
  },
  plugins: [],
}
