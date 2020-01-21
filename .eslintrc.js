module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'computed-property-spacing': 'off',
    'array-bracket-spacing': 'off',
    'linebreak-style': 'off',
    'arrow-body-style': 'off',
    'func-names': 'off',
    'no-return-assign': 'off',
    'import/no-cycle': 'off',
    'max-len': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-spaces': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
