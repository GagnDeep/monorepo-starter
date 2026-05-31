import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import Image from 'next/image';
import { PageAnimations } from '@/components/page-animations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'collections' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/collections', locale });
}

export default async function CollectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('collections');
  const nav = await getTranslations('nav');

  // Hardcoding verified image URLs
  const collectionImages = [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2683&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542241647-9cbbada2b309?q=80&w=2670&auto=format&fit=crop"
  ];

  return (
    <>
      <PageAnimations />
      <article className="container mx-auto py-24 md:py-32 animate-page-content">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-primary font-medium">{t('title')}</h1>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionImages.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src={src}
                alt={`Collection item ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif text-lg border border-white/50 px-6 py-2 rounded-full">View Details</span>
              </div>
            </div>
          ))}
        </div>

        <JsonLd
          data={breadcrumb(
            [
              { name: nav('home'), path: '/' },
              { name: t('title'), path: '/collections' },
            ],
            locale,
          )}
        />
      </article>
    </>
  );
}
