/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {frenchCanon:['"IM Fell French Canon"', 'serif']
  },
  keyframes: {
    textAnimation: {
      '0%': { fill: '#000' },
      '50%': { fill: '#3498db' },
      '100%': { fill: '#000' },
    },
  },
  animation: {
    textAnimation: 'textAnimation 3s ease-in-out infinite',
  },
  },
},
  plugins: [],
}
