import * as defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "white/15": "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        revealPulse: {
          "0%": {
            transform: "scale(1)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
