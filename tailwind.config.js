/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import daisyui from "daisyui";

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}", // Ensure components are included
    "./src/pages/**/*.{html,js,jsx,ts,tsx}", // Includes all files inside the pages folder
    "./node_modules/flowbite/**/*.js", // Flowbite library components
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#09122c",
        "secondary-color": "#f9fafb",
      },
    },
  },
  plugins: [flowbite],
  darkMode: "class",
};
