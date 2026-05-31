import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Collections - Aura Boutique', description: 'Explore our curated collections of Western and Ethnic wear.', path: '/collections', locale });
}

const collections = [
  {
    title: 'Western Wear',
    description: 'Trending tops, dresses, and skirts for the modern wardrobe.',
    image: 'https://images.unsplash.com/photo-1550614000-4b95d466f22e?q=80&w=1000&auto=format&fit=crop',
    href: '/shop?category=western',
  },
  {
    title: 'Custom Ethnic',
    description: 'Bespoke traditional attire tailored perfectly for you.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
    href: '/shop?category=ethnic',
  },
  {
    title: 'Bespoke Blouses',
    description: 'Intricate stitching and flawless fits, exclusively from Deepika.',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac044?q=80&w=1000&auto=format&fit=crop',
    href: '/shop?category=blouses',
  },
];

export default async function CollectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="container py-32 border-b border-border/20 mb-16">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none mb-6">
          Collections
        </h1>
      </div>

      <div className="container space-y-32">
        {collections.map((collection, i) => (
          <div key={collection.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
            <div className={`relative aspect-[4/5] bg-muted ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={`space-y-6 ${i % 2 !== 0 ? 'md:col-start-1 md:pr-12' : 'md:pl-12'}`}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">{collection.title}</h2>
              <p className="text-lg text-muted-foreground uppercase tracking-widest font-medium">
                {collection.description}
              </p>
              <div className="pt-8">
                <Link
                  href={collection.href}
                  className="inline-block border-b-2 border-foreground pb-1 font-bold uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
