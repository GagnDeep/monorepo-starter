import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import Image from 'next/image';
import { PageAnimations } from '@/components/page-animations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return buildMetadata({ title: t('title'), description: t('body'), path: '/about', locale });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const nav = await getTranslations('nav');

  return (
    <>
      <PageAnimations />
      <article className="container mx-auto py-24 md:py-32 animate-page-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="flex flex-col gap-8">
            <h1 className="font-serif text-5xl md:text-6xl text-primary font-medium">{t('title')}</h1>
            <div className="w-16 h-1 bg-accent rounded-full" />
            <div className="prose prose-lg dark:prose-invert font-sans text-muted-foreground leading-relaxed">
              <p>{t('body')}</p>
              <p>
                Heena's vision started with a simple belief: every individual deserves clothing that feels like a second skin, reflecting their unique personality and heritage.
              </p>
              <p>
                Our boutique is more than just a store; it's a sanctuary for design. We meticulously source the finest fabrics, collaborate with master embroiderers, and spend hours perfecting each silhouette. Whether it's a bespoke suit for a special occasion or a thoughtfully curated gifting ensemble, our commitment to craftsmanship is unwavering.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2670&auto=format&fit=crop"
              alt="Designer at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <JsonLd
          data={breadcrumb(
            [
              { name: nav('home'), path: '/' },
              { name: t('title'), path: '/about' },
            ],
            locale,
          )}
        />
      </article>
    </>
  );
}
