module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],

  ignorePatterns: [
    '.eslintrc.cjs',
    'config',
    'webpack.config.ts',
    'json-server',
    'scripts',
    'vite.config.ts',
  ],
  globals: { __IS_DEV__: true, __API__: true, __PROJECT__: true },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'ftoe-plugin', 'unused-imports'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-undef': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'ftoe-plugin/path-checker': ['error', { alias: '@' }],
    'ftoe-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'ftoe-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
  },
};
