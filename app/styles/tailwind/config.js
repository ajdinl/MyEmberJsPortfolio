/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs'],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        mybackground: '#efefef',
        myblue: '#38b6ff',
        mygreen: '#005C28',
        mygrey: '#5b5e66',
        mygreytwo: '#3C3E43',
      },
    },
  },
  plugins: [],
};
