import { defineConfig } from "windicss/helpers"
import defaultTheme from "windicss/defaultTheme"

/* Plugins */
import lineClamp from "windicss/plugin/line-clamp"
import typography from "windicss/plugin/typography"

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  shortcuts: {
    focusRing:
      "ring-offset-2 light:(ring-offset-gray-50 ring-gray-300) focus:outline-none focus:ring-1 dark:focus:(ring-offset-neutral-900 ring-neutral-800)",
  },
  plugins: [
    lineClamp,
    typography({
      dark: true,
    }),
  ],
})
