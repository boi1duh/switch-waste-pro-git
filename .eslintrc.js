module.exports = {
  env: {
    browser: true,
    es2022: true, // Updated from es2021 for modern JS support
    // Removed 'node: true' as this is a browser-based React app; add back if server-side rendering is used
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // Best practice: Enables JSX Transform (React 17+), reduces boilerplate
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended', // Added for import sorting and resolution best practices
    'plugin:import/typescript', // Optional: If TS is added later; ignore for pure JS
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022, // Aligned with env; supports newer syntax like private fields
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import', // Added for import-related rules
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'], // Ensures proper module resolution for readability
      },
    },
  },
  rules: {
    // General code quality (grouped for readability)
    'no-console': ['error', { allow: ['warn', 'error'] }], // Unchanged: Allows debugging logs
    'no-unused-vars': 'error', // Strengthened from 'warn' for better maintainability
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': 'error', // Added: Enforces strict equality to prevent type coercion bugs (best practice)
    'no-eval': 'error', // Added: Prevents security risks from eval (error handling edge case)

    // React best practices (expanded for patterns like hooks and fragments)
    'react/prop-types': 'off', // Disabled: PropTypes is legacy; prefer TypeScript or JSDoc for type safety (modern pattern)
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/react-in-jsx-scope': 'off', // Unchanged: Not needed in React 17+
    'react-hooks/exhaustive-deps': 'warn', // Added: Ensures hook dependencies are complete (best practice for performance)
    'react/jsx-no-useless-fragment': 'error', // Added: Prevents unnecessary <></> wrappers (readability)

    // Accessibility (enhanced for edge cases like non-interactive elements)
    'jsx-a11y/alt-text': 'error', // Strengthened to 'error' for critical a11y
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'error', // Strengthened: Keyboard navigation edge case
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn', // Added: Prevents non-interactive elements from handling events

    // Import rules (new section for maintainability)
    'import/order': ['warn', { 'newlines-between': 'always' }], // Added: Groups imports logically (readability)
    'import/no-unresolved': 'error', // Added: Catches broken imports early (error handling)

    // Performance: Avoid expensive patterns
    'no-loop-func': 'error', // Added: Prevents closures in loops that capture vars (performance in React renders)
  },
};
