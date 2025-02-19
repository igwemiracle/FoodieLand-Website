/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); // This imports the plugin function
const forFiller = require('tailwindcss-filters');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: '720px', // Fixed typo here
    },
    extend: {
      screens: {
        ss: '303px',
        md: '640px',
        lg: '1200px',
      },
      colors: {
        'foodie-blue': '#e7fafe', // Custom blue color
        'foodie-dim-blue': '#dbedf1',
        'dark-gray': '#48494A',
        'custom-white': '#FFFFFF'

      },
      filter: {
        white: 'invert(1)', // Example custom filter
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font for the project
        lobster: ['Lobster', 'sans-serif'], // For specific elements
      },
    },
  },
  plugins: [
    forFiller,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-gray': {
          'box-shadow': '9px 8px 15px rgba(161, 160, 160, 0.85)',
        },
        '.text-shadow-green': {
          'box-shadow': '15px 8px 15px rgba(170, 200, 170, 0.937)',
        },
        '.text-shadow-pink': {
          'box-shadow': '15px 8px 15px rgba(236, 173, 165, 0.937)',
        },
        '.text-shadow-yellow-light': {
          'box-shadow': '15px 8px 15px rgba(235, 233, 195, 0.937)',
        },
        '.text-shadow-yellow-dark': {
          'box-shadow': '15px 8px 15px rgba(228, 219, 169, 0.937)',
        },
        '.text-shadow-peach': {
          'box-shadow': '15px 15px 10px rgba(251, 213, 207, 0.937)',
        },
      });
    }),
  ],
};
