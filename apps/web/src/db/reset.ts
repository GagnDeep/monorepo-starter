import { existsSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const dbFile = './local.db';
if (existsSync(dbFile)) {
  unlinkSync(dbFile);
  console.log('✓ Removed', dbFile);
}

for (const step of ['src/db/migrate.ts', 'src/db/seed.ts']) {
  const r = spawnSync('tsx', [step], { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
}
