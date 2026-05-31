import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Shop - Aura Boutique', description: 'Browse our latest collections of western tops, custom ethnic wear, and bespoke blouses.', path: '/shop', locale });
}

const products = [
  { name: 'Midnight Velvet Dress', price: '₹2,499', category: 'Western', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Terracotta Crop Top', price: '₹1,299', category: 'Western', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Embroidered Silk Blouse', price: '₹3,499', category: 'Ethnic', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Ivory Wrap Skirt', price: '₹1,899', category: 'Western', image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Crimson Georgette Saree', price: '₹5,999', category: 'Ethnic', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Linen Button-Down', price: '₹1,499', category: 'Western', image: 'https://images.unsplash.com/photo-1550614000-4b95d466f22e?q=80&w=1000&auto=format&fit=crop' },
];

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-32 border-b border-border/20">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none mb-6">
          The Shop
        </h1>
        <p className="text-xl text-muted-foreground uppercase tracking-widest max-w-2xl font-medium">
          Curated styles for every occasion. Discover our latest western wear and bespoke ethnic designs.
        </p>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {products.map((product) => (
            <div key={product.name} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mt-1">
                    {product.category}
                  </p>
                </div>
                <span className="font-serif font-bold text-sm shrink-0">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
