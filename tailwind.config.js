/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark_gray_stone: "#252525",
      dark_gray_tile: "#404040",
      card_yellow: "#eea842",
      card_blue: "#33546e",
      card_brown: "#41201d",
      tree_light_green: "#64871c",
      tree_dark_green: "#174401",
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
