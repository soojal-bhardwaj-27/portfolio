/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a3bfff',
          400: '#799cff',
          500: '#5475ff',
          600: '#3a56f7',
          700: '#3046e5',
          800: '#2c3bc2',
          900: '#2a349d',
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
}