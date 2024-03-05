/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/**/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        support: {
          blue: "var(--support-blue)",
          green: "var(--support-green)",
        },
        dark: {
          1: "var(--dark-1)",
          2: "var(--dark-2)",
          3: "var(--dark-3)",
        },
        grey: {
          1: "var(--grey-1)",
          2: "var(--grey-2)",
          3: "var(--grey-3)",
        },
        berlin:{
          900: "#213452"
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),require('preline/plugin'),
  ],
};
