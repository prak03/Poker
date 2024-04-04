/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 5s steps(40) forwards ',
      },
      fontFamily: {
        'eagle-lake': ['Eagle Lake', 'cursive'],
      },

    },
  },
  plugins: [],
};
