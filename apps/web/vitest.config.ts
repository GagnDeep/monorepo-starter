import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }: any) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react() as any],
    resolve: { alias: { '@': resolve(__dirname, 'src') } },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
      exclude: ['node_modules/**', '.next/**', 'e2e/**'],
      env: {
        ...env,
        BETTER_AUTH_SECRET: 'test-secret-that-is-long-enough-for-auth',
        NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
      },
    },
  };
});
