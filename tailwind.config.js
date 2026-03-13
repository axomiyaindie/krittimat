/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0078D4', dark: '#005A9E', light: '#50E6FF' },
        bg: '#F5F9FF',
        text: { main: '#0B1F33', soft: '#5B6B7C' },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        assamese: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
