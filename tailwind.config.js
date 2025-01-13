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
        xs: '480px', // Custom smaller breakpoint
        ss: '374px', // For ultra-small screens (optional)
        lg: '1200px', // Adjusted large breakpoint
        xxl: '1700px' // Extra large breakpoint
      },
      colors: {
        'foodie-blue': '#e7fafe' // Custom blue color
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
          'text-shadow': '9px 8px 15px rgba(161, 160, 160, 0.85)',
        },
        '.text-shadow-green': {
          'text-shadow': '15px 8px 15px rgba(170, 200, 170, 0.937)',
        },
        '.text-shadow-pink': {
          'text-shadow': '15px 8px 15px rgba(236, 173, 165, 0.937)',
        },
        '.text-shadow-yellow-light': {
          'text-shadow': '15px 8px 15px rgba(235, 233, 195, 0.937)',
        },
        '.text-shadow-yellow-dark': {
          'text-shadow': '15px 8px 15px rgba(228, 219, 169, 0.937)',
        },
        '.text-shadow-peach': {
          'text-shadow': '15px 15px 10px rgba(251, 213, 207, 0.937)',
        },
      });
    }),
  ],
};
