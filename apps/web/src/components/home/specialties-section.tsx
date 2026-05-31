'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SPECIALTIES = [
  { key: 'stitched', icon: '🧵' },
  { key: 'unstitched', icon: '✨' },
  { key: 'festive', icon: '🎉' },
  { key: 'delivery', icon: '⏱️' }
] as const;

export function SpecialtiesSection() {
  const t = useTranslations('home.specialties');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.specialty-card');

    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-foreground mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALTIES.map((item) => (
            <div
              key={item.key}
              className="specialty-card bg-background p-8 border border-border/50 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                {t(`${item.key}.title` as any)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`${item.key}.description` as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
