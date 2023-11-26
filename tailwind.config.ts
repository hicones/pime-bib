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
          50: "#010100",
          100: "#FFFEFB",
          200: "#F7D159",
          300: "#FD3C48",
          400: "#1CCAAF",
          500: "#5CB564",
          600: "#F9E4D4",
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
