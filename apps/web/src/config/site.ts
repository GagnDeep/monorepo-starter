import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Acme',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'A best-in-class Next.js starter — i18n, SEO, auth, theming, all wired up.',
    es: 'Una plantilla Next.js de primer nivel — i18n, SEO, auth y temas, todo conectado.',
  } as Record<string, string>,
  og: {
    width: 1200,
    height: 630,
  },
  social: {
    twitter: '@acme',
  },
  brand: {
    // Used by the OG image route so colors track the theme.
    primary: '#18181b', // zinc-900
    background: '#ffffff',
    foreground: '#09090b',
  },
} as const;

export type SiteConfig = typeof siteConfig;
