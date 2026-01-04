/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD', // Deep Blue (Right side of logo gradient)
        secondary: '#5DE0E6', // Cyan/Light Blue (Left side of logo gradient)
        accent: '#FF914D', // Orange (Updated as requested)
        light: '#F8FAFC',
        dark: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}