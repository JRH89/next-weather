/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#718096',
        success: '#48bb78',
        error: '#f56565',
        whiter: '#f7fafc'
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

