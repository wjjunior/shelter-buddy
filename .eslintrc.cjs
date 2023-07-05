module.exports = {
  env: { browser: true, es2020: true, node: true, jest: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['prettier', 'import', 'jest'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
}
