import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1A6B3C",
          "green-2": "#2D7A4B",
          "green-3": "#3B6D11",
          "green-light": "#EAF3DE",
          "green-border": "#C0DD97",
          black: "#111111",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
