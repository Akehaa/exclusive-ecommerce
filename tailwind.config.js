const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'exclusive-background':'#FAFAFA',

        'exclusive-text-1': '#FAFAFA',
        'exclusive-text-2': '#000000',

        'exclusive-button-1':'#00FF66',

        'exclusive-button-2':'#DB4444',
        'exclusive-button-2-hover':'#E07575',
      },

      fontFamily: {
        poppins:['var(--font-poppins)', ...fontFamily.sans],
        inter:['var(--font-inter)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
