module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {},
      fontFamily: {
        "playfair-display": ["Playfair Display, serif;"],
      },
      colors: {
        dark: "#090909",
        "white-100": "#F5F6F7",
        lightPurple: "#BB86FC",
        lightDark: "#2C2C2C",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
