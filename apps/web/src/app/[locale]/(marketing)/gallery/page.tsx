import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return buildMetadata({ title: t('title'), path: '/gallery', locale });
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('gallery');
  const nav = await getTranslations('nav');

  return (
    <article className="prose prose-zinc dark:prose-invert mx-auto max-w-2xl py-12">
      <h1>{t('title')}</h1>
      <p>{t('body')}</p>
      <JsonLd
        data={breadcrumb(
          [
            { name: nav('home'), path: '/' },
            { name: t('title'), path: '/gallery' },
          ],
          locale,
        )}
      />
    </article>
  );
}
