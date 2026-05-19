import { env } from './env';
import { log } from './log';

// AGENT-NOTE: Stub. If env.SENTRY_DSN is set, install @sentry/nextjs and replace
// this with Sentry's captureException. Don't add the dep until you need it.
export function captureException(err: unknown, context?: Record<string, unknown>) {
  log.error('captureException', { err: String(err), sentry: !!env.SENTRY_DSN, ...context });
}
