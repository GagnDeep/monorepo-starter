'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export function Hero() {
  const t = useTranslations('home');
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

    // Staggered text reveal
    tl.fromTo(
      textRef.current!.children,
      { y: 100, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, stagger: 0.15, duration: 1.8 }
    );

    // Image scale & fade in
    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5 },
      '-=1.5'
    );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center pt-20">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="flex flex-col gap-8 max-w-2xl text-left" style={{ perspective: '1000px' }}>
          <h1 className="text-balance font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block text-primary">Global Threads,</span>
            <span className="block">Custom Elegance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105" asChild>
              <Link href="/services">{t('ctaPrimary')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold border-border hover:bg-secondary transition-all" asChild>
              <Link href="/contact">{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div ref={imageRef} className="absolute inset-0 lg:left-1/2 w-full lg:w-1/2 h-full z-0 overflow-hidden ml-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:w-1/4 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=2000"
          alt="Elegant Indian fashion"
          fill
          priority
          className="object-cover object-[70%_30%] scale-100"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
