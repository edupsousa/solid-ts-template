import { UserConfig as ViteConfig } from 'vite';
import checker from 'vite-plugin-checker';
import solidPlugin from 'vite-plugin-solid';
import { UserConfig as VitestConfig } from 'vitest/config';

type Config = ViteConfig & { test: VitestConfig['test'] };

const config: Config = {
  plugins: [
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
    environment: 'jsdom',
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
};

export default config;
