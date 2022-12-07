/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      'white': {
        DEFAULT: '#FFFFFF',
        dark: '#FFFFFF'
      },

      'black': {
        DEFAULT: '#000000',
        dark: '#000000',
      },

      'font': {
        DEFAULT: '#000000',
        dark: '#FFFFFF',
      },

      'background': {
        DEFAULT: '#FF6670', 
        dark: '#18081D',
      },

      'menu': {
        DEFAULT: '#FF8F96',
        dark: '#40144D',
      },

      'secondary': {
        DEFAULT: '#FFCCCF',
        dark: '#9614BD',
      },

      'primary': {
        DEFAULT: '#FFFFFF',
        dark: '#BF33EA',
      }
    }
  },
  plugins: [],
}
