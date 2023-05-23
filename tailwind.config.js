/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'hung': "#40a49a"
      },
      fontFamily: {
        pop: ["Poppins"],
    },
    },
  },
  plugins: [],
}