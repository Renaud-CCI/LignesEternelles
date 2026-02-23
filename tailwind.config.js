/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#252b2b',
        foreground: '#f8f0e8',
        golden: '#ffcd90',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'ui-sans-serif', 'system-ui'],
        sans: ['Quicksand', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

