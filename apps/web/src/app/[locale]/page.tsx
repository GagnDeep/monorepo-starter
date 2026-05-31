import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/', locale });
}

import { Hero } from '@/components/home/hero';
import { Heritage } from '@/components/home/heritage';
import { Collections } from '@/components/home/collections';
import { Craftsmanship } from '@/components/home/craftsmanship';
import { Testimonials } from '@/components/home/testimonials';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Heritage />
      <Collections />
      <Craftsmanship />
      <Testimonials />
    </div>
  );
}
