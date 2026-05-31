'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGsapContext } from '@/hooks/use-gsap';
import gsap from 'gsap';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGsapContext(() => {
    // Parallax background
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Kinetic typography reveal
    gsap.fromTo(
      textRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, [t]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
          alt="Bespoke Tailoring"
          fill
          priority
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div ref={textRef} className="flex flex-col items-center gap-4">
          <h1 className="text-balance font-serif text-5xl font-bold tracking-tight text-primary-foreground sm:text-7xl lg:text-8xl">
            {t('title')}
          </h1>
          <p className="max-w-2xl text-balance text-lg font-light text-primary-foreground/80 sm:text-2xl">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
