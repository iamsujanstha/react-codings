/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'calc-main': 'calc(100% - 12rem - 0.5rem)',
      },
    },
  },
  plugins: [],
}

