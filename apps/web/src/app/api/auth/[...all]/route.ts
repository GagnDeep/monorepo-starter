import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

// AGENT-NOTE: Catch-all handler for Better-Auth (sign-in, sign-up, session, OAuth callbacks).
// The `[...all]` segment must match what's configured in `lib/auth.ts` baseURL.
// Don't add custom logic here — extend `lib/auth.ts` instead.
export const { GET, POST } = toNextJsHandler(auth);
