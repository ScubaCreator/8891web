/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'river_bg': "url('./assets/background.jpg')",
      }
    },
  },
  plugins: [],
}

