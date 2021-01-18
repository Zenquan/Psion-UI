module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    jest: true,
    node: true,
    serviceworker: true,
    'shared-node-browser': true,
  },
  extends: [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  ignorePatterns: ['**/serviceWorker.js', 'build', 'coverage', 'node_modules'],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
