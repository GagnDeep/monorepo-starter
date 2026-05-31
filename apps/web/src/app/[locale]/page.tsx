import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { StorySection } from '@/components/home/story-section';
import { CollectionsPreviewSection } from '@/components/home/collections-preview-section';
import { BridalSection } from '@/components/home/bridal-section';
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
    <div className="flex w-full flex-col">
      <HeroSection />
      <StorySection />
      <CollectionsPreviewSection />
      <BridalSection />
      <ReviewsSection />
    </div>
  );
}
