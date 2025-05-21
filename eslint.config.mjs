import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'semi': ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
      'comma-dangle': ['error', 'always-multiline'],
      'brace-style': 'error',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'keyword-spacing': 'error',
      'func-call-spacing': ['error', 'never'],
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'warn',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default eslintConfig;