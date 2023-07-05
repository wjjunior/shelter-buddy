module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['prettier'],
}
