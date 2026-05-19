import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { posts } from '@/db/schema';

// AGENT-NOTE: DB queries live in `data/`, not in components. Import these from pages.
export async function listPosts(locale: string) {
  return db.select().from(posts).where(eq(posts.locale, locale)).all();
}

export async function getPost(slug: string) {
  return db.select().from(posts).where(eq(posts.slug, slug)).get();
}
