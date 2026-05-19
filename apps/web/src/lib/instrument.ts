import { env } from './env';
import { log } from './log';

// AGENT-NOTE: Stub. If env.SENTRY_DSN is set, install @sentry/nextjs and replace
// captureException with Sentry's. Don't add the dep until you need it.
export function captureException(err: unknown, context?: Record<string, unknown>) {
  if (env.SENTRY_DSN) {
    log.error('captureException (Sentry stub — wire @sentry/nextjs)', { err: String(err), ...context });
  } else {
    log.error('captureException', { err: String(err), ...context });
  }
}
