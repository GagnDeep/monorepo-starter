import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organization, website } from '@/lib/jsonld';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/utils';
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
    title: 'Acme',
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
  // AGENT-NOTE: setRequestLocale must be called in every server component that
  // reads translations — calling it in the layout makes children inherit it.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={cn(inter.variable, playfair.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-brand/20 selection:text-brand">
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
