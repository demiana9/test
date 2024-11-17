/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      color:'orange'
    },
    extend: {
      zIndex: {
        '100': '100',
        "-100":'-100'
      }
    },
  },
  plugins: [],
}

