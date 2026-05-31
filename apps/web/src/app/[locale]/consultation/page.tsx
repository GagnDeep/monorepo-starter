import { getTranslations } from 'next-intl/server';
import { PageShell } from '@/components/page-shell';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'consultation', path: '/consultation', locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'consultation' });
  return (
    <PageShell title={t('title')}>
      <p>{t('description')}</p>
    </PageShell>
  );
}
