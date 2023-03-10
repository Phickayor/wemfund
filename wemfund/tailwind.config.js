/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textcolor:'#0B0C11',
        bgcolor: '#F4F4F4',
        darkblue: '#131725',
        btncolor: '#ff9b00'
      }
    },
  },
  plugins: [],
}