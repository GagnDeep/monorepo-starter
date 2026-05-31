import { routing } from '@/i18n/routing';

export const siteConfig = {
  name: 'Purba Fashion Makers',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
  description: {
    en: 'Custom tailoring shop in Urban Estate Phase 1 Market, Patiala. Specialty: Pathani kurtas, Nehru jackets, WhatsApp ordering, fast deadline accommodation.',
    es: 'Sastrería a medida en Urban Estate Phase 1 Market, Patiala. Especialidad: kurtas Pathani, chaquetas Nehru, pedidos por WhatsApp, entrega rápida.',
  } as Record<string, string>,
  og: {
    width: 1200,
    height: 630,
  },
  social: {
    twitter: '@purbafashion',
  },
  brand: {
    primary: '#f59e0b', // amber-500
    background: '#fefce8', // yellow-50
    foreground: '#1e293b', // slate-800
  },
} as const;

export type SiteConfig = typeof siteConfig;
