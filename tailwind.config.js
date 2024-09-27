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
        'dark-bg': '#12141D',
        'piramy': '#377DFF',
        'my-gray': {
          100: '#f3f4f6',
          200: '#e5e7eb',
        }
      },

      boxShadow: {
        'blue': '0px 1px 20px 4px #377DFF',
        'blue-2': '0px 1px 25px 2px #377DFF',
        'CardBtm': '0px 4px 0px rgb(55,65,81)',
      },
      blur: {
        '2a': '0px',
        '4a': '4px',
      },
      font: {
        'LogoFt': 'font-family: "Pacifico", cursive',
      },
      from: {
        'black1': 'rgb(0,0,0)'
      },
      to: {
        'trans': 'rgba(0,0,0,0.711)'
      }
    },
  },
  plugins: [
    flowbite, // Register the Flowbite plugin
  ],
};