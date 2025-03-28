import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'prettier'],
    ignorePatterns: ['.next/**'],
    settings: {
      next: {
        rootDir: 'frontend/',
      },
    },
  }),
  { files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'] },
  { files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended,
]);
