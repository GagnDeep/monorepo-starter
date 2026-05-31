import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';
import { HeroAnimations } from './hero-animations';
import { AboutSection } from './about-section';
import { ServicesSection } from './services-section';
import { ReviewsSection } from './reviews-section';
import { ContactSection } from './contact-section';

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
  const t = await getTranslations('home');

  return (
    <>
      <HeroAnimations />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background/50">
          {/* A soft, warm, abstract or fabric-like high-quality image */}
          <Image
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2670&auto=format&fit=crop"
            alt="Textured fabric background"
            fill
            className="object-cover opacity-60 mix-blend-multiply dark:opacity-30 dark:mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 mx-auto flex flex-col items-center text-center gap-8 pt-20 pb-32">
          <h1 className="hero-title text-balance font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-primary">
            <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl mb-4 font-medium tracking-normal opacity-90">Designlane Heena</span>
            {t('title')}
          </h1>

          <p className="hero-text text-balance max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('description')}
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full px-8 text-base tracking-wide uppercase font-semibold h-14">
              <Link href="/collections">{t('ctaPrimary')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base tracking-wide uppercase font-semibold h-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/consultation">{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <AboutSection />

      <ServicesSection />

      <ReviewsSection />

      <ContactSection />
    </>
  );
}
