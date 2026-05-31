import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { SpecialtiesSection } from '@/components/home/specialties-section';
import { FeaturedCollection } from '@/components/home/featured-collection';
import { ReviewsSection } from '@/components/home/reviews-section';
import { AboutPreview } from '@/components/home/about-preview';
import { InstagramFeed } from '@/components/home/instagram-feed';
import { ContactCTA } from '@/components/home/contact-cta';

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
    <>
      <HeroSection />
      <SpecialtiesSection />
      <FeaturedCollection />
      <ReviewsSection />
      <AboutPreview />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
