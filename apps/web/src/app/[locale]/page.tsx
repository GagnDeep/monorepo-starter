import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { MarqueeStats } from '@/components/home/marque-stats';
import { FeaturedCategories } from '@/components/home/featured-categories';
import { StoryValues } from '@/components/home/story-values';
import { Bestsellers } from '@/components/home/bestsellers';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ title: 'Aura Boutique & Fashion Studio', description: 'Trendy Western & Custom Ethnic Wear', path: '/', locale });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <MarqueeStats />
      <FeaturedCategories />
      <StoryValues />
      <Bestsellers />
    </>
  );
}
