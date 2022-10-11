/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#006ADB',
        secondary: '#00BBBE',
        tittleGray: 'hsl(210, 10%, 33%)',
        textGray: 'hsl(201, 11%, 66%)'
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
