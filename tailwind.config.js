/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "450px",
      ...defaultTheme.screens,
    },
    colors: {
      black: "#111518",
      grey: "#A5AEAF",
      white: "#F5F5F5",
      blue: "#1A80E6",
      lightblack: "#293038",
      depth: "#1C2227",
      bordercolor: "#42484D",
    },

    extend: {},
  },
  plugins: [],
};
