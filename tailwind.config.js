const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.65rem'
      },
      colors: {
        primary: colors.blue
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
