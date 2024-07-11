/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
}
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "translate-z": (value) => ({
          "--tw-translate-z": value,
          transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
        }), // this is actual CSS
      },
      { values: theme("translate"), supportsNegativeValues: true }
    )
  }),
]
