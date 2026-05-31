import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'collection' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/collection', locale });
}

const ITEMS = [
  { img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop', titleKey: 'items.redSilk' },
  { img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop', titleKey: 'items.goldEmbroidered' },
  { img: 'https://images.unsplash.com/photo-1583391733958-6c84b162f111?q=80&w=800&auto=format&fit=crop', titleKey: 'items.festiveLehenga' },
  { img: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800&auto=format&fit=crop', titleKey: 'items.unstitchedCotton' },
  { img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop', titleKey: 'items.floralGeorgette' },
  { img: 'https://images.unsplash.com/photo-1583391265517-35bbbd8184c7?q=80&w=800&auto=format&fit=crop', titleKey: 'items.velvetSuit' }
];

export default async function CollectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('collection');

  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">{t('title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('description')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ITEMS.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <Image
                    src={item.img}
                    alt={t(item.titleKey as any) || 'Collection item'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t(item.titleKey as any)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
