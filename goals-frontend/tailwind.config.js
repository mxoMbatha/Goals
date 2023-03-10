/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1440px',
      xxl:'1600px',
    },
      extend: {
        colors:{
          fanta:'hsl(12,88%,59%)',
          fantaLight:'hsl(12,88%,69%)',
          fantaSuperLight:'hsl(12,88%,95%)',
          darkBlue:'hsl(228,39%,23%)',
          darkGrayishBlue:'hsl(227,12%,61%)',
          veryDarkBlue:'hsl(223,12%,13%)',
          veryPaleFanta:'hsl(13,100%,96%)',
          darkBlueish:'hsl(0,0%,98%)',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}
