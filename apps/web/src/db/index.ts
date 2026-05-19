import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '@/lib/env';
import { schema } from './schema';

export const client = createClient({
  url: env.DATABASE_URL,
  ...(env.DATABASE_AUTH_TOKEN ? { authToken: env.DATABASE_AUTH_TOKEN } : {}),
});

export const db = drizzle(client, { schema });

export type DB = typeof db;
export { schema };
