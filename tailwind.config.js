/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, liquid}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
