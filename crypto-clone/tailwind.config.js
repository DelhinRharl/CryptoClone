module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important : "#root",
  theme: {
    extend: {
      backgroundImage: {
        'backi': "url('./assets/images/background.jpg')",
    },
  },
  variants: {
    width: ["responsive", "hover", "focus", "active"],
    height: ["responsive", "hover", "focus", "active"],
  },

  plugins: [],
}
}
