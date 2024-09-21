/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add the Flowbite components path explicitly
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {

      colors: {
        'dark-bg': '#1a1927',
        'my-gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
        }
      },

      boxShadow: {
        'blue': '0px 1px 20px 4px rgba(91,185,211,0.864)',
        'blue-2': '0px 1px 25px 2px rgba(49,127,240,0.662)',
      },
      blur: {
        '2a': '2px',
        '4a': '4px',
      },
      font: {
        'LogoFt': 'font-family: "Pacifico", cursive',
      }
    },
  },
  plugins: [
    flowbite, // Register the Flowbite plugin
  ],
};