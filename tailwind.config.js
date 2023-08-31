/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        sea: {
          100: '#4DA8DA',
          200: '#007CC7',
          500: '#004A77'
        },
        night: {
          200: '#1D384C',
          300: '#152836',
          600: '#12232E',
          700: '#071620',
          900: '#0B0C10'
        },
        fog: {
          200: '#D7D7D7',
          400: '#A9A9A9'
        }

      }
    },
  },
  plugins: [],
}

