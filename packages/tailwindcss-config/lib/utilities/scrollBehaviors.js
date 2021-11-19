const plugin = require('tailwindcss/plugin');

const scrollBehaviors = plugin(
  function ({ addUtilities }) {
    const scrollBehaviors = {
      '.scroll-smooth': {
        'scroll-behavior': 'smooth'
      },
      '.scroll-auto': {
        'scroll-behavior': 'auto'
      }
    };

    addUtilities(scrollBehaviors);
  }
);

module.exports = scrollBehaviors;
