/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        buttons: "#7364d2",
      },
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.5)',
    },
    },
  },
  plugins: [],
}

