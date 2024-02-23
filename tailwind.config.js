/* eslint-disable import/no-extraneous-dependencies, global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['"Raleway"', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
