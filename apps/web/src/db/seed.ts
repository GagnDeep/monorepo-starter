import { db } from './index';
import { posts } from './schema';

async function main() {
  await db.insert(posts).values([
    { title: 'Welcome (EN)', slug: 'welcome-en', body: 'Hello from the seed.', locale: 'en' },
    { title: 'Bienvenido (ES)', slug: 'welcome-es', body: 'Hola desde el seed.', locale: 'es' },
  ]).onConflictDoNothing();
  console.log('✓ Seeded posts');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
