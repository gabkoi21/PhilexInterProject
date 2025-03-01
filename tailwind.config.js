/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-color": "#09122c",
        "secondary-color": "#f9fafb",
      },
    },
  },
  plugins: [flowbite],
  darkMode: "class",
};
