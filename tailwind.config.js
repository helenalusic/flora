module.exports = {
  content: ['index.vue'],
  mode:'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/deprecation-warnings'),
    require('autoprefixer'),
  ],
}
