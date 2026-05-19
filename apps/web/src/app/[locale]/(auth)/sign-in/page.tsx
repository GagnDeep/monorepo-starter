import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { SignInForm } from './sign-in-form';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'signIn' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/sign-in',
    locale,
    noIndex: true,
  });
}

export default async function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('signIn');

  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6 py-16">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
      </div>
      <SignInForm />
    </div>
  );
}
