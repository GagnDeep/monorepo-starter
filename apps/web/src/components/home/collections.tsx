'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 1,
    title: 'Bridal Lehengas',
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Intricate Zardozi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d61dc0?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Handcrafted Sarees',
    image: 'https://images.unsplash.com/photo-1583391733958-65e298dd9e96?q=80&w=2000&auto=format&fit=crop',
  },
];

export function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold text-center mb-16">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-white font-bold tracking-wider text-center px-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
