// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        selector: 'variableLike',
        trailingUnderscore: 'allow'
      },
      {
        format: ['strictCamelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: ['function']
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike'
      },
      {
        custom: {
          match: true,
          regex: '^I[A-Z]'
        },
        format: ['PascalCase'],
        selector: 'interface'
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    camelcase: 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 0,
    'react/no-unescaped-entities ': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
