const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
  plugins: ['prettier', 'react', 'flowtype'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['router', 'params'],
      },
    ],
    'flowtype/no-types-missing-file-annotation': 0,
    'react/no-deprecated': 1,
    'react/no-direct-mutation-state': 1,
  },
  settings: {
    react: { 'version': '15.2.1' },
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
