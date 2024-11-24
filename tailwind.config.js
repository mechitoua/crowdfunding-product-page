/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif'],
      },
      colors: {
        'moderate-cyan': 'var(--moderate-cyan)',
        'dark-cyan': 'var(--dark-cyan)',
      },
    },
  },
  plugins: [],
}
