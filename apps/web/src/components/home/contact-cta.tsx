'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const t = useTranslations('home.ctaSection');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta-content',
      { scale: 0.9, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5 -z-10" />
      <div className="container mx-auto px-4 cta-content flex flex-col items-center text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          {t('title')}
        </h2>
        <p className="max-w-2xl text-xl text-muted-foreground mb-10">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg rounded-none">
            <Link href="/contact">{t('buttonPrimary')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 h-14 px-10 text-lg rounded-none">
            <Link href="/services">{t('buttonSecondary')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
