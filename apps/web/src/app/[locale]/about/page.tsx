import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'About Aura Boutique', description: 'Founded by Deepika in Tripuri, Patiala. We specialize in custom ethnic wear, flawless blouse stitching, and trending western pieces.', path: '/about', locale });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="container py-32 border-b border-border/20 mb-16">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight uppercase leading-none mb-6">
          Our Story
        </h1>
        <p className="text-xl text-muted-foreground uppercase tracking-widest max-w-2xl font-medium">
          Where tradition meets modern aesthetics. Rooted in Patiala, worn nationwide.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="relative aspect-[3/4] bg-muted w-full">
          <Image
            src="https://images.unsplash.com/photo-1584443152778-9eb06bce88e8?q=80&w=1000&auto=format&fit=crop"
            alt="Deepika measuring fabric"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase leading-tight">
            Meet Deepika
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 font-medium leading-relaxed">
            <p>
              Aura Boutique & Fashion Studio was born in the heart of Tripuri, Patiala, with a simple vision: to create clothing that makes every woman feel confident, elegant, and uniquely herself.
            </p>
            <p>
              Under the creative direction of our founder, Deepika, we have mastered the art of <strong className="text-foreground font-bold">flawless blouse stitching</strong> and <strong className="text-foreground font-bold">bespoke custom dresses</strong>. Whether it&apos;s a delicate ethnic ensemble for a wedding or a trending western top for a night out, every piece is crafted with meticulous attention to detail.
            </p>
            <p>
              Our dedication to quality has earned us a <strong className="text-primary font-bold">5.0★ rating from over 28 clients</strong>. We believe style has no borders, which is why we proudly ship our curated pieces Pan-India, delivering within 4 days.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/20">
            <div>
              <p className="font-serif text-4xl font-bold text-primary mb-2">5.0★</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Client Rating</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-primary mb-2">4 Days</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pan-India Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
