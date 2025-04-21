/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'], // This defines font-heading
      },
      colors: {
        primary: {
          light: '#8CC63F',
          DEFAULT: '#5E8C2F',
          dark: '#3A5C1E',
        },
        secondary: {
          light: '#F2F7EA',
          DEFAULT: '#E0EBD2',
          dark: '#C4D6AA',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        }
      }
    },
  },
  plugins: [],
}