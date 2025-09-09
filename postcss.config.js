module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      grid: true,
      flexbox: true,
    },
    // Add CSS optimization for production
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: false,
        }],
      },
    } : {}),
  },
}