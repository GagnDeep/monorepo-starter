import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import { ContactClient } from '@/components/contact/contact-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return buildMetadata({ title: t('title'), path: '/contact', locale });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const nav = await getTranslations('nav');

  return (
    <div className="container mx-auto py-16 md:py-24 px-4">
      <ContactClient
        title={t('title')}
        description={t('description')}
        visit={t('visit')}
        address={t('address')}
        hours={t('hours')}
        phoneLabel={t('phoneLabel')}
        phone={t('phone')}
        name={t('name')}
        email={t('email')}
        message={t('message')}
        submit={t('submit')}
      />
      <JsonLd
        data={breadcrumb(
          [
            { name: nav('home'), path: '/' },
            { name: t('title'), path: '/contact' },
          ],
          locale,
        )}
      />
    </div>
  );
}
