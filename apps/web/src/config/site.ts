import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Kohinoor Trends',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'Kohinoor Trends — A multi-generational women\'s ethnic and bridal boutique in Sector 17, Chandigarh. Established 1998.',
    es: 'Kohinoor Trends — Una boutique multigeneracional de moda étnica y nupcial para mujeres en Sector 17, Chandigarh. Fundada en 1998.',
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
    primary: '#590d22', // deep maroon
    background: '#fffdfa',
    foreground: '#3d0c11',
  },
} as const;

export type SiteConfig = typeof siteConfig;
