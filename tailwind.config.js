/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      'inter': ['Inter'],
      'title': ['Playfair Display'],
    },
    container:{
      center:true,
      screens:{
        lg: '1170px',
      }
    },
    extend: {
      colors: {
        primary: '#505a5b',
        putih1: '#e8ebe4',
        putih2: '#EFF1ED',
        gray3: '#333333',
      },    
    },
  },
  plugins: [],
}
