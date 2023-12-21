/* eslint-disable prettier/prettier */
// .eslintrc.js
module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    plugins: ['react', 'prettier'],
    rules: {
        // 'prettier/prettier': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
}
