/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '376px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        logo:{
          orange: "hsla(25, 100%, 57%, 0.73)",
          blue: "hsla(230, 80%, 32%, 0.73)",
          red: "hsla(6, 100, 54, 0.73)",
          green: "hsla(107, 49%, 52%, 0.73)", 
          lightblue: "hsla(194, 100%, 47%, 0.73)", //rgba(0, 184, 241, 1)
        },
        darkGreen: {
          100: "hsla(159, 100%, 16%, 1)",
          80: "hsla(159, 100%, 16%, 0.8)",
          30: "hsla(159, 100%, 16%, 0.3)",
        },
        lemonGreen: {
          100: "hsl(87, 48%, 50%, 1)",
          80: "hsl(87, 48%, 50%, 0.8)",
          30: "hsl(87, 48%, 50%, 0.3)",
        },
        lightGreen: {
          100: "hsl(87, 71%, 88%, 1)",
          80: "hsl(87, 71%, 88%, 0.8)",
          30: "hsl(87, 71%, 88%, 0.3)",
        },
      },
      animation: {
        telon: 'telon 0.5s ease'
      },
      keyframes: {
        telon: {
          '0%': {
            transform: 'translate(0px, 100%)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        }
      }
    },
  },
  plugins: [],
};
