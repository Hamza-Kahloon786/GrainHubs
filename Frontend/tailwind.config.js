module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}