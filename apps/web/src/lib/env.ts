import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().min(1).default('file:./local.db'),
  DATABASE_AUTH_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string().min(32, 'BETTER_AUTH_SECRET must be at least 32 chars'),
  BETTER_AUTH_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  RESEND_API_KEY: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

const parsed = schema.safeParse(process.env);
if (!parsed.success) {
  console.error('❌ Invalid environment variables:');
  for (const issue of parsed.error.issues) {
    console.error(`  ${issue.path.join('.')}: ${issue.message}`);
  }
  throw new Error('Invalid environment variables. See errors above.');
}

export const env = parsed.data;
export type Env = typeof env;
