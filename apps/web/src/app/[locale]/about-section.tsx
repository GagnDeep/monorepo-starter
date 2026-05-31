'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the text block from the bottom
      gsap.fromTo(textRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Subtle parallax reveal on the image
      gsap.fromTo(imageRef.current,
        { scale: 0.9, opacity: 0, rotation: 2 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Image Side */}
          <div ref={imageRef} className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2572&auto=format&fit=crop"
              alt="Designer working on fabrics"
              fill
              className="object-cover"
            />
            {/* Subtle decorative overlay border */}
            <div className="absolute inset-4 border border-background/20 rounded-xl z-10 pointer-events-none" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="flex flex-col gap-6 md:pr-12">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
              {t('philosophy')}
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-medium leading-tight">
              {t('founder')}
            </h3>
            <div className="w-12 h-1 bg-accent rounded-full mt-2 mb-4" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('philosophyText')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
