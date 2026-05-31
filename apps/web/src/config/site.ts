import { env } from '@/lib/env';
import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Gladies Boutique',
  url: env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'Designer suit boutique near Police Station Road, Tripuri, Patiala. Specialty: stitched designer suits, festive collection, on-time delivery.',
    es: 'Boutique de trajes de diseñador cerca de Police Station Road, Tripuri, Patiala.',
  } as Record<string, string>,
  contact: {
    phone: '+91 77197 09501',
    address: 'Near Police Station Road, Tripuri, Patiala',
    hours: 'Mon-Sat 10AM-8PM',
  },
  og: {
    width: 1200,
    height: 630,
  },
  social: {
    twitter: '@gladiesboutique',
  },
  brand: {
    primary: '#BA112A', // Deep Festive Red
    background: '#FAF9F6', // Cream
    foreground: '#262626', // Deep Charcoal
  },
} as const;

export type SiteConfig = typeof siteConfig;
