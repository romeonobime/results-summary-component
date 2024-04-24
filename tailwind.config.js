/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    colors: {
      lightRed: 'hsl(var(--color-light-red) / <alpha-value>)',
      orangeYellow: 'hsl(var(--color-orange-yellow) / <alpha-value>)',
      greenTeal: 'hsl(var(--color-green-teal) / <alpha-value>)',
      cobaltBlue: 'hsl(var(--color-cobalt-blue) / <alpha-value>)',
      lightStaleBlue: 'hsl(var(--color-light-stale-blue) / <alpha-value>)',
      lightRoyalBlue: 'hsl(var(--color-light-royal-blue) / <alpha-value>)',
      violetBlue: 'hsl(var(--color-violet-blue) / <alpha-value>)',
      persianBlue: 'hsl(var(--color-persian-blue) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
      paleBlue: 'hsl(var(--color-pale-blue) / <alpha-value>)',
      lightLavender: 'hsl(var(--color-light-lavender) / <alpha-value>)',
      darkGrayBlue: 'hsl(var(--color-dark-gray-blue) / <alpha-value>)',
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
    },
    extend: {},
  },
  plugins: []
}