'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function HeroSection() {
  const t = useTranslations('home');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-image', {
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    })
    .from('.hero-text > *', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    }, '-=1');
  }, { scope: container });

  return (
    <section ref={container} className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-background">
      {/* Background Image Parallax layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2938&auto=format&fit=crop"
          alt="Elegant Indian Ethnic Wear"
          fill
          priority
          className="hero-image object-cover object-top opacity-90"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] md:bg-gradient-to-r md:from-background/80 md:to-background/20" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 md:items-start md:px-12 text-center md:text-left pt-20">
        <div className="hero-text flex max-w-2xl flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary drop-shadow-sm">
            {t('title')}
          </p>
          <h1 className="text-balance text-5xl font-serif font-bold tracking-tight text-foreground sm:text-7xl drop-shadow-md">
            {t('heroHeading')}
          </h1>
          <p className="text-lg md:text-xl text-foreground font-medium drop-shadow-sm">
            {t('heroSub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-medium uppercase tracking-widest px-8" asChild>
              <Link href="/collections">{t('heroCta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
