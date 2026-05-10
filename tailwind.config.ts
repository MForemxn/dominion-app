import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#fdf8f0",
          100: "#f9edd8",
          200: "#f2d9af",
          300: "#e8be7e",
          400: "#dc9e4d",
          500: "#d4842a",
          600: "#c16920",
          700: "#a0511c",
          800: "#81411d",
          900: "#6a371b",
        },
        card: {
          action: "#2d5a8e",
          attack: "#8b1a1a",
          reaction: "#1a5c2e",
          treasure: "#8b7400",
          victory: "#4a1a6b",
          duration: "#7a4e00",
          night: "#1a1a3a",
          reserve: "#4a3000",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
