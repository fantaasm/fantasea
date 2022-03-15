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
        roboto: ["Roboto"],
      },
      colors: {
        lightPurple: "#BB86FC",
        dark: "#1A1A1A",
        lightDark: "#2C2C2C",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
