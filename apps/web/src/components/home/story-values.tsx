'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function StoryValues() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );

      tl.fromTo(
        textRef.current?.children ? Array.from(textRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={imageRef} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
          <Image
            src="https://images.unsplash.com/photo-1571513722275-4b41940f54b4?q=80&w=1000&auto=format&fit=crop"
            alt="Deepika - Aura Boutique Owner"
            fill
            className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-sm shadow-xl z-10 hidden md:block">
            <p className="font-serif text-4xl font-bold">5.0★</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2">Loved by Clients</p>
          </div>
        </div>

        <div ref={textRef} className="space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
            The Aura<br />Story
          </h2>
          <p className="text-lg md:text-xl font-medium text-secondary-foreground/80 leading-relaxed max-w-xl">
            Founded by Deepika in Tripuri, Patiala, Aura Boutique merges traditional craftsmanship with contemporary aesthetics. We believe every piece should feel like it was made just for you.
          </p>
          <div className="pt-4 grid grid-cols-2 gap-8 border-t border-border/20">
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-2">Specialty</h4>
              <p className="text-secondary-foreground/70 text-sm">Flawless Blouse Stitching & Custom Dresses</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-2">Reach</h4>
              <p className="text-secondary-foreground/70 text-sm">Pan-India Shipping within 4 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
