module.exports = {
  plugins: {
    tailwindcss: {},
    // Use postcss-preset-env to handle vendor prefixes automatically
    'postcss-preset-env': {
      stage: 1, // Use modern CSS features
    },
    // Add CSS optimization for production
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          // Enable whitespace normalization for better minification
          normalizeWhitespace: true,
        }],
      },
    } : {}),
  },
}