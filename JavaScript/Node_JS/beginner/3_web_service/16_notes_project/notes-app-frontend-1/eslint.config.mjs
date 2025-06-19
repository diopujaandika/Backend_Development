/* eslint-disable import/no-extraneous-dependencies */
import js from '@eslint/js';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
// eslint-disable-next-line import/no-unresolved
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
]);
