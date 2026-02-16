/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2dd4bf",
        "primary-variant": "rgba(45, 212, 191, 0.4)",
        bg: "#1f1f38",
        "bg-variant": "#2c2c6c",
        light: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
