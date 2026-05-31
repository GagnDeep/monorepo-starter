'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Western Wear',
    image: 'https://images.unsplash.com/photo-1550614000-4b95d466f22e?q=80&w=1000&auto=format&fit=crop',
    href: '/collections/western',
  },
  {
    title: 'Custom Ethnic',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
    href: '/collections/ethnic',
  },
  {
    title: 'Bespoke Blouses',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac044?q=80&w=1000&auto=format&fit=crop',
    href: '/collections/blouses',
  },
];

export function FeaturedCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">
            The Essentials
          </h2>
          <Link href="/shop" className="text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary transition-colors hover:border-primary">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative block aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white font-serif text-3xl font-bold uppercase tracking-wider translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
