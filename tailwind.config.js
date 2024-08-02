/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightPink: '#FFEAD0',
        lighterPink: '#FFF7ED',
        reddish: '#E17654',
        green: '#115E59',
        black: '#161616',
        lightBlack: '#1A1B21',
        lightGray: '#4D4D4D'
      },

      fontFamily:{
        variant:['inter']
      }
    },
  },
  plugins: [],
}

