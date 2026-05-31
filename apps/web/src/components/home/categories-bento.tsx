'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    id: 'heavy-bridal',
    title: 'Heavy Bridal',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto',
  },
  {
    id: 'party-wear',
    title: 'Party Wear',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1 aspect-square',
  },
  {
    id: 'cotton-casuals',
    title: 'Cotton Casuals',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=600&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1 aspect-square',
  },
  {
    id: 'winter-shawls',
    title: 'Winter Shawls',
    image: 'https://images.unsplash.com/photo-1605007493699-af65834f8a00?q=80&w=1000&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-1 aspect-[2/1]',
  },
];

export function CategoriesBento() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.fromTo(
        '.bento-header',
        { opacity: 0, y: 30 },
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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="bento-header font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Styles for Every Occasion
            </h2>
            <p className="bento-header mt-4 text-muted-foreground">
              From everyday elegance to your most special moments, discover collections crafted with care and tradition.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`group relative overflow-hidden rounded-sm bg-muted ${cat.className}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl font-semibold text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  {cat.title}
                </h3>
                <span className="mt-2 text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Shop Category →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
