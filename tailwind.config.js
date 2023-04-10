/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53389E",
        secondary: "#7F56D9",
        tertiary: "#E9D7FE",
        quaternary: "#6941C6",
        quinary: "#F4EBFF",
        offwhite: "#F9FAFB",
        offblack: "#667085",
      },
    },
  },
  plugins: [],
};
