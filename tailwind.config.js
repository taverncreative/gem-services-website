/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6BBE44',
          'primary-dark': '#559936',
          'primary-light': '#84cf60',
        },
        neutral: {
          dark: '#2A2A2A',
          body: '#4A4A4A',
          muted: '#7A7A7A',
        },
        background: {
          soft: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
