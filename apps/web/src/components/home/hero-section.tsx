'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for choreographed hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Subtle zoom out on the image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1 },
          { scale: 1, duration: 2, ease: 'power2.out' }
        );
      }

      // Stagger text and CTA
      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(
        subheadRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef as any}
          src="https://images.unsplash.com/photo-1515347619152-16b71cbb6683?q=80&w=2000&auto=format&fit=crop"
          alt="Aura Boutique - Trendy Women's Fashion"
          fill
          priority
          className="object-cover opacity-60 dark:opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center space-y-8 px-4 mt-20">
        <h1
          ref={headlineRef}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground uppercase leading-[0.9]"
        >
          Curated<br />Elegance
        </h1>

        <p
          ref={subheadRef}
          className="max-w-xl text-lg sm:text-xl text-foreground/80 font-medium tracking-wide uppercase"
        >
          Trending Western & Custom Ethnic Wear. Designed in Patiala. Delivered Pan-India.
        </p>

        <div ref={ctaRef} className="pt-8">
          <Link
            href="/shop"
            className="group relative inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore the Collection
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
