import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import { env } from './env';

// AGENT-NOTE: This handler is mounted at app/api/auth/[...all]/route.ts.
// Add OAuth providers by setting env vars and uncommenting `socialProviders`.
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL ?? env.NEXT_PUBLIC_SITE_URL,
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   },
  // },
});

export type Session = typeof auth.$Infer.Session;
