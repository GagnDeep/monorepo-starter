import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

// AGENT-NOTE: This array is the source of truth for sitemap entries.
// `pnpm gen:page <route>` appends to it automatically.
const ROUTES = ['/', '/about', '/contact', '/sign-in', '/collections', '/consultation'] as const;

function abs(path: string) {
  const base = siteConfig.url.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of routing.locales) {
      const path = route === '/' ? `/${locale}` : `/${locale}${route}`;
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[l] = abs(route === '/' ? `/${l}` : `/${l}${route}`);
      }
      languages['x-default'] = abs(
        route === '/' ? `/${routing.defaultLocale}` : `/${routing.defaultLocale}${route}`,
      );

      entries.push({
        url: abs(path),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: route === '/' ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
