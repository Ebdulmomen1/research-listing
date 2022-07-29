/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        govBrown: "#C7AA78",
        govBrownHover: "#BE9E4B",
      },
    },
  },
  plugins: [],
};
