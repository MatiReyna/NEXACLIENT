/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        buttons: "#4c4093",
        titulos: "#9192e8",
        subtitulos: "#272145"
      },
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        "Rubik": ["Rubik", "cursive"]
      }
    },
  },
  plugins: [],
}

