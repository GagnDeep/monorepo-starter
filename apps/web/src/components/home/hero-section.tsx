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
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    )
    .fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=1'
    )
    .fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.6'
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=2574&auto=format&fit=crop"
          alt="Designer Suits"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 py-24 text-center">
        <h1
          ref={headlineRef}
          className="text-balance font-serif text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-8xl"
        >
          {t('title')}
        </h1>
        <p
          ref={textRef}
          className="max-w-2xl text-balance text-xl md:text-2xl text-foreground font-light"
        >
          {t('description')}
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-none">
            <Link href="/collection">{t('ctaPrimary')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg rounded-none">
            <Link href="/contact">{t('ctaSecondary')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
