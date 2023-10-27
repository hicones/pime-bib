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
        background: {
          100: "#FFFEFB",
          200: "#DD0A0A",
          300: "#FCCE0B",
          400: "#27BF64",
          500: "#FF7525",
          600: "#FF2D93",
          700: "#2CA7EB",
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
