/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#84d187', // Light green
          500: '#22c55e',
          600: '#00b207', // Accent green
          700: '#2c742f', // Dark green
          800: '#166534',
          900: '#14532d',
        },
      },
    },
  },
  plugins: [],
};