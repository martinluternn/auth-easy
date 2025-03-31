import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ),
  {
    ignores: ['eslint.config.mjs', 'commitlint.config.js', 'babel.config.js'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      prettier,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: './tsconfig.json',
      },
    },

    rules: {
      'import/no-unresolved': 0,
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'import/extensions': ['error', 'never'],
      'react/prop-types': 0,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
    },
  },
];
