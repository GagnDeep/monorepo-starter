import { defineConfig } from '@playwright/test';

// AGENT-NOTE: The webServer needs a valid BETTER_AUTH_SECRET to boot — we inject
// a deterministic test value here so `pnpm e2e` runs without a local .env.
const TEST_AUTH_SECRET = 'test-secret-for-playwright-only-do-not-use-in-prod';

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:3000' },
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000/en',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: {
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ?? TEST_AUTH_SECRET,
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
      DATABASE_URL: 'file:./local.db',
    },
  },
});
