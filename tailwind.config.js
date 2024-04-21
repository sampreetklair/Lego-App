module.exports = {
  content: [`./views/**/*.ejs`],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['coffee'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}