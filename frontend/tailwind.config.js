/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greyFriends: {
          light: '#A8AD9C',
          DEFAULT: '#80B721',
          dark: '#444939',
        },
        natural: {
          light: '#F8FBF1',
          DEFAULT: '#80B721',
          dark: '#88966B',
        },
        beige: '#F6EDD9',
      },
    },
  },
  plugins: [],
};
