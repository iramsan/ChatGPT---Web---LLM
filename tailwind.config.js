// /** @type {import('tailwindcss').Config} */
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

module.exports = {
  content: [
    "./src/**/*.{html,js,ejs}",
    "./public/**/*.html", // Si usas HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Si usas JavaScript/React
    "./views/**/*.ejs", // Si usas EJS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections([
        "mdi",
        "lucide",
        "streamline",
        "hugeicons",
        "token-branded"
      ]),
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    }),
  ],
};
