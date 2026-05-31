'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const t = useTranslations('home');
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Initial reveal
      tl.fromTo(
        '.hero-title-line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      ).fromTo(
        '.hero-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      ).fromTo(
        '.hero-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.1 },
        '-=0.8'
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text fade on scroll
      gsap.to(textRef.current, {
        y: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative h-[120%] w-full -top-[10%]">
          <Image
            src="https://images.unsplash.com/photo-1583391733958-650fac5eb369?q=80&w=2000&auto=format&fit=crop"
            alt="Traditional Indian Bridal Wear"
            fill
            priority
            className="object-cover object-top opacity-40 mix-blend-luminosity"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent mix-blend-multiply" />
        </div>
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center text-primary-foreground"
      >
        <h1 className="mb-6 flex flex-col items-center justify-center text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl font-serif">
          <span className="hero-title-line overflow-hidden pb-2">Timeless</span>
          <span className="hero-title-line overflow-hidden pb-2 text-secondary">Elegance.</span>
          <span className="hero-title-line overflow-hidden pb-2">Unforgettable</span>
          <span className="hero-title-line overflow-hidden pb-2 text-secondary">Weddings.</span>
        </h1>
        <p className="hero-desc mx-auto max-w-2xl text-lg text-primary-foreground/80 md:text-xl font-medium">
          {t('description')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/collections"
            className="hero-btn inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/about"
            className="hero-btn inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
