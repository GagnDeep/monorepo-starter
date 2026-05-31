import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'YAVA DESIGNS',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'Women\'s designer boutique in Chandigarh. Specializing in custom-stitched ethnic suits with fast domestic and international delivery.',
    es: 'Boutique de diseñador para mujeres en Chandigarh. Especializada en trajes étnicos cosidos a medida con entrega rápida nacional e internacional.',
  } as Record<string, string>,
  og: {
    width: 1200,
    height: 630,
  },
  social: {
    twitter: '@yavadesigns',
  },
  brand: {
    // Used by the OG image route so colors track the theme.
    primary: '#45332c', // From global.css primary
    background: '#faf8f5',
    foreground: '#2a2624',
  },
} as const;

export type SiteConfig = typeof siteConfig;
