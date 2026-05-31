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
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 py-24 text-center">
      <h1 className="text-balance font-serif text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">{t('title')}</h1>
      <p className="max-w-2xl text-balance text-lg text-muted-foreground">{t('description')}</p>
      <div className="flex gap-4 mt-6">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/collection">{t('ctaPrimary')}</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/contact">{t('ctaSecondary')}</Link>
        </Button>
      </div>
    </section>
  );
}
