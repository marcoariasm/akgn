/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
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
