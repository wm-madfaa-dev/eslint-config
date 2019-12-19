module.exports = {
  parser: 'babel-eslint',
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
};
