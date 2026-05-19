import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './index';

async function main() {
  console.log('Applying migrations…');
  await migrate(db, { migrationsFolder: './src/db/migrations' });
  console.log('Done.');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
