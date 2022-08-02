/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs'],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        mybackground: '#efefef',
        myblue: '#38b6ff',
        mygreen: '#008037',
        mygrey: '#5b5e66',
      },
    },
  },
  plugins: [],
};
