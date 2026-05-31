import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import { AboutClient } from '@/components/about/about-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return buildMetadata({ title: t('title'), path: '/about', locale });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const nav = await getTranslations('nav');

  const statsProps = {
    rating: t('stats.rating'),
    ratingLabel: t('stats.ratingLabel'),
    delivery: t('stats.delivery'),
    deliveryLabel: t('stats.deliveryLabel'),
    global: t('stats.global'),
    globalLabel: t('stats.globalLabel'),
  };

  return (
    <article className="container mx-auto py-16 md:py-24 px-4 overflow-hidden">
      <AboutClient
        subtitle={t('subtitle')}
        title={t('title')}
        body1={t('body1')}
        body2={t('body2')}
        stats={statsProps}
      />
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
  );
}
