import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Mutiyar the Fashion Studio',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'A women\'s stitching boutique in Urban Estate Phase 2, Patiala. Customised suits, vibrant color collections, and international standard stitching.',
    es: 'Boutique de costura para mujeres en Urban Estate Phase 2, Patiala. Trajes personalizados, colecciones de colores vibrantes y costura de estándar internacional.',
  } as Record<string, string>,
  og: {
    width: 1200,
    height: 630,
  },
  social: {
    twitter: '@mutiyar',
  },
  brand: {
    // Deep Wine/Magenta primary
    primary: '#8A2846',
    background: '#FCF9F3',
    foreground: '#3E1F2C',
  },
} as const;

export type SiteConfig = typeof siteConfig;
