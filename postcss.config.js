module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    'postcss-flexbugs-fixes': {},
    tailwindcss: {},
    'postcss-mixins': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-reporter': {},
    cssnano: {},
  },
};
