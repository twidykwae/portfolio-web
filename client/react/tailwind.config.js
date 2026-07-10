/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-deep": "var(--color-ink-deep)",
        paper: "var(--color-paper)",
        "paper-dim": "var(--color-paper-dim)",
        "paper-soft": "var(--color-paper-soft)",
        "paper-faint": "var(--color-paper-faint)",
        divider: "var(--color-divider)",
        "divider-soft": "var(--color-divider-soft)",
        accent: {
          DEFAULT: "var(--color-accent)",
          deep: "var(--color-accent-deep)",
          hover: "var(--color-accent-hover)",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("daisyui")],
}
