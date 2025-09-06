import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import * as tseslint from 'typescript-eslint';

export default [
  // 무시할 경로
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'coverage/**',
      './.fttemplates/**/*',
      'petstore.d.ts',
      'next-env.d.ts',
      '*.js',
    ],
  },

  // eslint:recommended
  js.configs.recommended,

  // typescript-eslint recommended
  ...tseslint.configs.recommended,

  // react recommended
  {
    plugins: { react },
    rules: { ...react.configs.recommended.rules },
    settings: { react: { version: 'detect' } },
  },

  // next/core-web-vitals
  {
    plugins: { '@next/next': nextPlugin },
    rules: { ...nextPlugin.configs['core-web-vitals'].rules },
  },

  // import recommended
  {
    plugins: { import: importPlugin },
    rules: { ...importPlugin.configs.recommended.rules },
    settings: { 'import/resolver': { node: true, typescript: true } },
  },

  // jsx-a11y recommended
  {
    plugins: { 'jsx-a11y': jsxA11y },
    rules: { ...jsxA11y.configs.recommended.rules },
  },

  // perfectionist recommended-natural
  {
    plugins: { perfectionist },
    rules: { ...perfectionist.configs['recommended-natural'].rules },
  },

  // react-hooks plugin
  {
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  // 프로젝트 커스텀 룰
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        JSX: true,
        naver: true,
        NodeJS: true,
        React: true,
      },
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/export': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'perfectionist/sort-jsx-props': 'warn',
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
  // prettier 플러그인 등록 + 룰 활성화
  {
    plugins: { prettier: prettierPlugin },
    rules: { 'prettier/prettier': 'error' },
  },

  {
    files: ['scripts/**/*.{ts,tsx}'],
    rules: {
      'no-console': 'off', // scripts 폴더에서는 console 허용
    },
  },

  // 마지막: 충돌 제거용 config (그대로 유지)
  prettierConfig,
];
