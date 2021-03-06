module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'jest/globals': true,
    'shared-node-browser': true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'no-confusing-arrow': ['error', { allowParens: false }],

    'import/prefer-default-export': 0,

    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': 0,
    'react/sort-comp': 2,
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
};
