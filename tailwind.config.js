/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "iris-red": "#FC364C",
        "iris-black": "#0D0D0D",
        "iris-gray": "rgba(13, 13, 13, 0.5)",
        "iris-gray-light": "background: rgba(31, 31, 31, 1)",
        "iris-gradient":
          "linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)",
      },
    },
  },
  plugins: [],
};
