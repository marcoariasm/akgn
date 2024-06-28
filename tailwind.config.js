/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '375px'},
        'md': {'min': '376px', 'max': '768px'},
        'lg': {'min': '769px'},
      },
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
        green: {
          // --dark-green: #005034;
          // --light-green: #e2f6c9;
          // --lemon-green: #86bc42;
          dark: "#005034",
          lemon: "#86bc42",
          light: "#e2f6c9",
        },
        black: {
          100: "hsla(0, 0%, 0%, 1)",
          90: "hsla(0, 0%, 0%, 0.9)",
          80: "hsla(0, 0%, 0%, 0.8)",
          50: "hsla(0, 0%, 0%, 0.5)",
          33: "#333",
        },
        magenta: {
          100: "hsla(323, 86%, 60%, 1)",
          80: "hsla(323, 86%, 60%, 0.8)",
          50: "hsla(323, 86%, 60%, 0.5)",
        },
        cyan: {
          100: "hsla(201, 70%, 70%, 1)",
          80: "hsla(201, 70%, 70%, 0.8)",
          50: "hsla(201, 70%, 70%, 0.5)",
          20: "hsla(201.82, 73.33%, 97.06%, 0.2)",
        },
      },
    },
  },
  plugins: [],
};
