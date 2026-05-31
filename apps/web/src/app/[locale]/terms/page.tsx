import { getTranslations } from 'next-intl/server';
import { PageShell } from '@/components/page-shell';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'terms', path: '/terms', locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  return (
    <PageShell title={t('title')}>
      <p>{t('description')}</p>
    </PageShell>
  );
}
