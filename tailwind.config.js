module.exports = {
  mode: 'jit',
  purge: [
    '_site/**/*.html',
    './src/**/*.{html,njk}'
  ],
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
