import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { IntroSection } from '@/components/home/intro-section';
import { CollectionsSection } from '@/components/home/collections-section';
import { StitchingPromoSection } from '@/components/home/stitching-promo-section';
import { ReviewsSection } from '@/components/home/reviews-section';

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
      <HeroSection />
      <IntroSection />
      <CollectionsSection />
      <StitchingPromoSection />
      <ReviewsSection />
    </div>
  );
}
