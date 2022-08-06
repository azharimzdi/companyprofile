/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#06b6d4',
        secondary: '#18181b',
        third: '#67e8f9',
        fourth: '#64748b',
      },
      screens:{
        '2xl' : '1320',
      },
    },
  },
  plugins: [],
}
