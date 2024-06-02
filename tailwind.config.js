const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0052CC',
        'customBlue-color' : '#008FFB',
        'customYellow-color' : '#FEB019',
        'customGreen-color' : '#00E396',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
