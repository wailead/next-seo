import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          default: "#2EC8C8",
          100: "#E0F5F6",
          200: "#C3F6F6",
        },

        gray: {
          default: "#222222",
          100: "#BDBDBD",
          200: "#9E9E9E",
          300: "#616161",
          400: "#5C5C5C",
          500: "#4D4D4D",
          600: "#424242",
        },
        white: {
          default: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F5F5F5",
          300: "#F2F2F2",
          400: "#EEEEEE",
          500: "#D9D9D9",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
