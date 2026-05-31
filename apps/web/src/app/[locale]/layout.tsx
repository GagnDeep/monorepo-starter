import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Playfair_Display } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organization, website } from '@/lib/jsonld';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: 'Gladies Boutique',
    description: 'Designer suit boutique near Police Station Road, Tripuri, Patiala. Stitched designer suits, festive collection, and unstitched fabrics.',
    path: '/',
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <JsonLd data={[organization(), website(locale)]} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
