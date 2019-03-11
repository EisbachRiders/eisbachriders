module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'react-hooks'],
  globals: {
    graphql: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
