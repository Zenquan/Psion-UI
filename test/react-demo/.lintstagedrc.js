module.exports = {
  '*.{css,html,js,jsx,json,md,scss,yml}': ['npm run format'],
  '*.{css,scss}': ['npm run lint:stylelint'],
  '*.{js,jsx}': ['npm run lint:eslint'],
};
