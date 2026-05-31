'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    { titleKey: 'specialtyCustom' as const, descKey: 'specialtyCustomDesc' as const, delay: 0 },
    { titleKey: 'specialtyConsultation' as const, descKey: 'specialtyConsultationDesc' as const, delay: 0.1 },
    { titleKey: 'specialtyGifting' as const, descKey: 'specialtyGiftingDesc' as const, delay: 0.2 },
    { titleKey: 'specialtyEmbroidery' as const, descKey: 'specialtyEmbroideryDesc' as const, delay: 0.3 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal title
      gsap.fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stagger reveal cards
      gsap.fromTo(cardsRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 ref={titleRef} className="font-serif text-4xl md:text-5xl font-medium mb-16">
          {t('specialties')}
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 border border-primary-foreground/20 rounded-2xl hover:bg-primary-foreground/5 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-accent/20 mb-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
