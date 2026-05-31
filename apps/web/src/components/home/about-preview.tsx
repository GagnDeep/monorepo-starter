'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutPreview() {
  const t = useTranslations('home.about');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.about-image-overlay',
      { height: '100%' },
      {
        height: '0%',
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1
        }
      }
    );

    gsap.fromTo('.about-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1200&auto=format&fit=crop"
              alt="Boutique Storefront"
              fill
              className="object-cover"
            />
            <div className="about-image-overlay absolute inset-0 bg-background origin-top" />
          </div>

          <div className="w-full md:w-1/2 about-text">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg rounded-none">
              <Link href="/about">{t('cta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
