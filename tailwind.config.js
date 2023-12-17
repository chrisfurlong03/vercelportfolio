module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Calistoga", "cursive"],
        serif: ["Trocchi", "serif"],
        sans: ["system-ui", "sans-serif"]
      },
      maxHeight: {
        "325": "52px"
      }
    }
  },
  plugins: []
};
