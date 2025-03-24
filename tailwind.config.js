/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

module.exports = {
  content: [
    './public/index.html', // Ensure index.html is being scanned
    './src/**/*.{js,jsx,ts,tsx}', // Scan all components and pages in src
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
