'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useGsapContext } from '@/hooks/use-gsap';
import gsap from 'gsap';

export function IntroSection() {
  const t = useTranslations('home.intro');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGsapContext(() => {
    // Split text simulation via spans if needed, but for simplicity we will fade/slide the block
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto py-24 md:py-36 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 font-serif text-3xl text-brand md:text-5xl">
          {t('heading')}
        </h2>
        <p
          ref={textRef}
          className="text-balance text-lg font-light leading-relaxed text-muted-foreground md:text-3xl md:leading-snug"
        >
          {t('body')}
        </p>
      </div>
    </section>
  );
}
