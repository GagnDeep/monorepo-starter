'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Midnight Velvet Dress',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Terracotta Crop Top',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Embroidered Silk Blouse',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Ivory Wrap Skirt',
    price: '₹1,899',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?q=80&w=1000&auto=format&fit=crop',
  },
];

export function Bestsellers() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none mb-4">
            Curated For You
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">Latest Drops & Bestsellers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Link
              key={product.name}
              href="/shop"
              ref={(el) => { itemsRef.current[i] = el; }}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-bold text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <span className="font-serif font-bold text-sm shrink-0">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-foreground text-background px-12 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Shop the Instagram Feed
          </Link>
        </div>
      </div>
    </section>
  );
}
