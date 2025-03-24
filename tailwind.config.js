/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

module.exports = {
  content: [
    './public/index.html', // Main HTML file
    './public/pages/**/*.html', // ✅ Include all pages inside /public/pages
    './src/**/*.{js,jsx,ts,tsx}', // Scan all JS/TS/React files inside src
    './node_modules/flowbite/**/*.js', // Include Flowbite components
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-color': '#09122c',
        'secondary-color': '#f9fafb',
      },
    },
  },
  plugins: [flowbite],
  darkMode: 'class',
};
