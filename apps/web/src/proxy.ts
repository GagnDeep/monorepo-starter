import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

// AGENT-NOTE: This matcher must exclude every non-locale-prefixed route. If you add
// a new top-level non-locale route (e.g. `/health`), append it to the negative lookahead.
// Filename `proxy.ts` is Next 16's renamed middleware convention.
export const config = {
  matcher: ['/((?!api|_next|_vercel|og|sitemap.xml|robots.txt|.*\\..*).*)'],
};
