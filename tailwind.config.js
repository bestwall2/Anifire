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
      }
    },
  },
  plugins: [
    flowbite, // Register the Flowbite plugin
  ],
};