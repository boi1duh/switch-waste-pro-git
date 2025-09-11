module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    // General code quality
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',

    // React best practices
    'react/prop-types': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+

    // Accessibility
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};