/* Disabled because this file is used only in dev environment */
/* eslint-disable import/no-extraneous-dependencies */
import suidPlugin from '@suid/vite-plugin';
import checker from 'vite-plugin-checker';
import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    suidPlugin(),
    solidPlugin(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}"',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'happy-dom', // or 'jsdom'
    globals: true,
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    setupFiles: './setupVitest.ts',
    threads: false,
    isolate: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
