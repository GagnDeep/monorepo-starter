import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { user } from '@/db/schema';

// AGENT-NOTE: DB queries live in `data/`, not in components or pages.
// Pages call these helpers and pass results down as props.
export async function getUserById(id: string) {
  return db.select().from(user).where(eq(user.id, id)).get();
}

export async function getUserByEmail(email: string) {
  return db.select().from(user).where(eq(user.email, email)).get();
}

export async function listUsers(limit = 50) {
  return db.select().from(user).limit(limit).all();
}
