/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      basalt_gray_stone: "#252525",
      dark_gray_stone: "#555555",
      soft_green: "#b5d6ab",
      warm_terracotta: "#cc7832",
      dusty_rose: "#c78680",
      light_taupe: "#bfb39b",
      pale_beige: "#e4d7ba",
      moss_green: "#89a67d",
      olive_green: "#8c9c61",
      forest_green: "#536847",
      burnt_sienna: "#ba613d",
      rustic_red: "#9d4d3e",
      deep_burgundy: "#5f1821",
      sky: { 100: "#a0d8ef", 900: "#2980b9" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
