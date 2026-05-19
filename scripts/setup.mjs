#!/usr/bin/env node
// Bootstrap a fresh clone: writes apps/web/.env.local with a real secret,
// runs migrations, prints next step. Idempotent — re-running is safe.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';

const envPath = 'apps/web/.env.local';

if (!existsSync(envPath)) {
  const example = readFileSync('.env.example', 'utf8');
  const secret = randomBytes(32).toString('base64');
  const populated = example.replace(
    /BETTER_AUTH_SECRET=.*/,
    `BETTER_AUTH_SECRET=${secret}`,
  );
  writeFileSync(envPath, populated);
  console.log('✓ Wrote', envPath, '(with generated BETTER_AUTH_SECRET)');
} else {
  console.log('✓', envPath, 'already exists — leaving alone');
}

const migrate = spawnSync('pnpm', ['--filter', 'web', 'db:migrate'], {
  stdio: 'inherit',
});
if (migrate.status !== 0) {
  console.error('✗ db:migrate failed');
  process.exit(migrate.status ?? 1);
}

console.log('\n✓ Setup complete. Next: pnpm dev');
