/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffd60a",
        secondary: {
          100: "#001d3d",
          900: "#000814"
        },
        tertiary: "#F2F2F2"
      }
    },
  },
  plugins: [],
};
