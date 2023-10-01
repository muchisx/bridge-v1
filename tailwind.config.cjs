const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        pulseScale: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        flash: {
          "0%": {
            opacity: 0.4,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0.4,
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-within", ["&:hover", "&:focus-within"]);

      addVariant("group-hocus-within", [
        ":merge(.group):hover &",
        ":merge(.group):focus-within &",
      ]);
    }),
  ],
};
