/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ridamen:{
          blue:"#266074",
          DEFAULT:"#00C9A7"
        }
      }
    },
    
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
