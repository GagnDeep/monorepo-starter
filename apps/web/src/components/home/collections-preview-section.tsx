'use client';

import { useRef } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const collections = [
  {
    id: 'cotton-suits',
    title: 'Cotton Suits',
    description: 'Elegant, breathable everyday wear featuring intricate block prints and hand embroidery.',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'lehengas',
    title: 'Exquisite Lehengas',
    description: 'From light festive wear to heavy bridal sets, crafted with premium fabrics.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'shawls',
    title: 'Premium Shawls',
    description: 'Luxurious pashminas and silk shawls to complete any traditional ensemble.',
    image: 'https://images.unsplash.com/photo-1605007493699-af65834f8a00?q=80&w=800&auto=format&fit=crop',
  }
];

export function CollectionsPreviewSection() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.coll-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          },
        }
      );

      // Staggered cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: i * 0.2, // Stagger effect even if they enter viewport at different times on mobile
          }
        );

        // Image subtle scale on hover is handled by CSS, but we'll add a parallax to the image inside
        const img = card.querySelector('.coll-img');
        if (img) {
          gsap.to(img, {
            y: '15%',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="coll-header mb-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Curated Collections
          </h2>
          <p className="coll-header max-w-[600px] text-lg text-muted-foreground">
            Explore our diverse range of traditional wear, meticulously selected to suit every occasion and generation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-sm bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div className="coll-img absolute -inset-[10%] h-[120%] w-[120%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium text-brand">
                  Explore Collection
                  <span className="ml-2 block transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/collections"
            className="coll-header inline-flex h-12 items-center justify-center rounded-md border-2 border-brand px-8 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
