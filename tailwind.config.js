/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue_500: '#603AE5',
        velvel_curtain:'#8181A5',
        black_500:'#1C1D21',
        gray_200:'#EEEEEE',
        black_200:'#0E253C',
        dark_bg:'#001121',
        field_dark_bg:'#010D19'
      },
    },
  },
  plugins: [],
}

