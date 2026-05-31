import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Yaseen Tailor',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'Bespoke suits, sherwanis, and kurta-pajamas crafted with decades of heritage by Master Tailor Faisal Khan.',
    es: 'Trajes a medida, sherwanis y kurta-pajamas elaborados con décadas de herencia por el Sastre Maestro Faisal Khan.',
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
    primary: '#111827', // deep navy-ish
    background: '#fefdfa', // warm cream
    foreground: '#2a2d34',
  },
} as const;

export type SiteConfig = typeof siteConfig;
