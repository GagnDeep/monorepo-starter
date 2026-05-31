import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';
import { SpecialtiesSection } from '@/components/home/specialties-section';
import { AboutSection } from '@/components/home/about-section';
import { ProcessSection } from '@/components/home/process-section';
import { GalleryPreviewSection } from '@/components/home/gallery-preview-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FaqSection } from '@/components/home/faq-section';
import { LocationSection } from '@/components/home/location-section';
import { CtaSection } from '@/components/home/cta-section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/',
    locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // AGENT-NOTE: Required for static generation of i18n routes
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <ProcessSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <LocationSection />
      <CtaSection />
    </>
  );
}
