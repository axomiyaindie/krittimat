export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0078D4', // Your Azure blue
          dark: '#005A9E',    // Darker version for hover
          50: '#E6F2F9',
          100: '#CCE5F3',
          200: '#99CBEA',
          300: '#66B1E0',
          400: '#3397D7',
          500: '#0078D4',
          600: '#005A9E',
          700: '#004578',
          800: '#00284D',
          900: '#001226',
        },
        text: {
          main: '#0B1F33',
          secondary: '#4A627A',
          light: '#8BA0B8',
        },
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      backgroundColor: {
        'primary-dark': '#005A9E',
      },
      borderColor: {
        'primary': '#0078D4',
      },
    },
  },
  plugins: [],
}