import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/services', locale });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">{t('description')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-16">

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="text-4xl mb-4">✂️</div>
                <h3 className="font-serif text-3xl font-bold text-primary">{t('stitching.title')}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground leading-relaxed">{t('stitching.description')}</p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="font-serif text-3xl font-bold text-primary">{t('delivery.title')}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground leading-relaxed">{t('delivery.description')}</p>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="font-serif text-3xl font-bold text-primary">{t('styling.title')}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground leading-relaxed">{t('styling.description')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
