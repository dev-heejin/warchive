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

  // 기본 설정들
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 메인 설정
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react,
      '@next/next': nextPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      perfectionist,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        JSX: true,
        naver: true,
        NodeJS: true,
        React: true,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: true,
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // React & JSX
      ...react.configs.recommended.rules,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      // Next.js
      ...nextPlugin.configs['core-web-vitals'].rules,

      // Import
      ...importPlugin.configs.recommended.rules,
      'import/export': 'off',

      // 접근성 (필요한 것만 끄기)
      ...jsxA11y.configs.recommended.rules,
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',

      // Perfectionist
      ...perfectionist.configs['recommended-natural'].rules,
      'perfectionist/sort-jsx-props': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      // 기타
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prettier/prettier': 'error',
    },
  },

  // Scripts 폴더는 console 허용
  {
    files: ['scripts/**/*.{ts,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },

  // Prettier 충돌 제거 (마지막에)
  prettierConfig,
];
