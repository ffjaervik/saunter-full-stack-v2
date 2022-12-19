/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F8F5EF',
        'black': '#000000',
        'white': '#FFFFFF',
        'orange': '#F9983F',
        'orange-light': '#FDE0C5',
        'blue': '#909AD1'
      }
    },
    fontFamily: {
      megrim: ['Megrim']
    }
  },
  plugins: [],
}