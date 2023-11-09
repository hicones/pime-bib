import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: {
          100: "#FFFEFB",
          200: "#2E3258",
          300: "#F1C7D1",
          400: "#FD3C48",
          500: "#F7D159",
          600: "#1CCAAF",
          700: "#5CB564",
          800: "#4C3B31",
        },
        fontcolor: {
          50: "#FFFEFB",
          100: "#192536",
        },
      },
    },
  },
  plugins: [],
};
export default config;
