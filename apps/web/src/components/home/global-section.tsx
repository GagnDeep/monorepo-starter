'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGsapContext } from '@/hooks/use-gsap';
import gsap from 'gsap';

export function GlobalSection() {
  const t = useTranslations('home.global');
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
          alt="Measuring"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={cardRef}
          className="mx-auto max-w-3xl border border-brand/30 bg-primary/80 backdrop-blur-sm p-8 text-center md:p-16 rounded-sm shadow-2xl"
        >
          <h2 className="mb-6 font-serif text-3xl md:text-5xl">{t('heading')}</h2>
          <p className="mb-8 text-balance text-lg font-light leading-relaxed text-primary-foreground/80 md:text-2xl">
            {t('body')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919815663746" className="inline-flex h-12 items-center justify-center rounded-sm bg-brand px-8 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90">
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
