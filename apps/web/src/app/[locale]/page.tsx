import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';

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
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">{t('title')}</h1>
      <p className="text-balance text-lg text-muted-foreground">{t('description')}</p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/sign-in">{t('ctaPrimary')}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/about">{t('ctaSecondary')}</Link>
        </Button>
      </div>
    </section>
  );
}
