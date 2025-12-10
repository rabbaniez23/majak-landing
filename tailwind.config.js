/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'majak-blue': '#0056b3', 
        'majak-dark': '#0f172a',
        'majak-orange': '#f97316',
        'majak-accent': '#ff8e3c', // Oranye lebih muda untuk gradasi
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Font Utama jadi Poppins
      }
    },
  },
  plugins: [],
}