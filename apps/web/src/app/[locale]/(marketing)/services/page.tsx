import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import { ServicesClient } from '@/components/services/services-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return buildMetadata({ title: t('title'), path: '/services', locale });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');
  const nav = await getTranslations('nav');

  const items = [
    { title: t('items.0.title'), desc: t('items.0.description'), img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=1200' },
    { title: t('items.1.title'), desc: t('items.1.description'), img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200' },
    { title: t('items.2.title'), desc: t('items.2.description'), img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=1200' },
  ];

  return (
    <div className="container mx-auto py-16 md:py-24 px-4">
      <ServicesClient subtitle={t('subtitle')} title={t('title')} items={items} />
      <JsonLd
        data={breadcrumb(
          [
            { name: nav('home'), path: '/' },
            { name: t('title'), path: '/services' },
          ],
          locale,
        )}
      />
    </div>
  );
}
