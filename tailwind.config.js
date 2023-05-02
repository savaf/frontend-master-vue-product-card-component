/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // - Dark cyan: hsl(158, 36%, 37%)
      // - Cream: hsl(30, 38%, 92%)
      // - Very dark blue: hsl(212, 21%, 14%)
      // - Dark grayish blue: hsl(228, 12%, 48%)
      // - White: hsl(0, 0%, 100%)

      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream': '#F2EAE2',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'display': ['Fraunces', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "14px"
      }
    },
  },
  plugins: [],
}

