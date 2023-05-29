/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xxsm: "340px",
      xsm: "480px",
      ...screens,
    },
    extend: {
      colors: {
        "tradeX-blueBlack-500": "#0E1D39",
      },
      fontFamily: {
        sans: "var(--source-sans-pro)",
        montserrat: "var(--montserrat)",
      },
      boxShadow: {
        "tradeX-box-shadow": "5px 5px 30px rgba(193,193,193,0.25)",
        "tradeX-btn-shadow": "0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
