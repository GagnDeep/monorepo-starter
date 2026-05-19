import { existsSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const dbFile = './local.db';
if (existsSync(dbFile)) {
  unlinkSync(dbFile);
  console.log('✓ Removed', dbFile);
}

const migrate = spawnSync('pnpm', ['db:migrate'], { stdio: 'inherit' });
if (migrate.status !== 0) process.exit(migrate.status ?? 1);

const seed = spawnSync('tsx', ['src/db/seed.ts'], { stdio: 'inherit' });
if (seed.status !== 0) process.exit(seed.status ?? 1);
