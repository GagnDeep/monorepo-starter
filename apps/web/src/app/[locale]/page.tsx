import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

import { Hero } from '@/components/home/hero';
import { AboutPreview } from '@/components/home/about-preview';
import { ProcessTimeline } from '@/components/home/process-timeline';
import { FeaturedCollections } from '@/components/home/featured-collections';
import { Testimonials } from '@/components/home/testimonials';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/', locale });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutPreview />
      <ProcessTimeline />
      <FeaturedCollections />
      <Testimonials />
    </div>
  );
}
