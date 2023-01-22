/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel : ['"Cinzel Decorative"'],
        mons1 : ['Montserrat'],
        poppins : ['Poppins'],
        roboto : ['Roboto']

      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
