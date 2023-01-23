/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      logo: ['Playfair Display'],
    },

    colors: {
      light_beige: '#f3eee8',
      dark_beige: '#e3dacd',
      text_colour: '#1f1d1d',
      pink: '#f8c1ca',
      gray: '#7c7774',
      black: 'black'
    },
  },
  plugins: [],
};