/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--unnamed-color-041e42)",
        secondary: "var(--unnamed-color-ff8672)",
        white: "var(--unnamed-color-ffffff)",
        dark: "var(--unnamed-color-111111)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", "70px"], // Titolo principale
        h3: ["43px", "53px"],
        p1: ["35px", "45px"], // Paragrafi grandi
        p2: ["25px", "35px"],
        button: ["16px", "24px"], // Stile per i pulsanti
      },
      boxShadow: {
        form: "0 4px 16px rgba(0, 0, 0, 0.1)", // Ombra personalizzata per il form
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".uppercase": { textTransform: "uppercase" },
        ".btn-base": {
          padding: "12px 32px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        }, // Stile base per i bottoni
      });
    }),
  ],
};