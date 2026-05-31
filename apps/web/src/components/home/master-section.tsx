'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGsapContext } from '@/hooks/use-gsap';
import gsap from 'gsap';

export function MasterSection() {
  const t = useTranslations('home.master');
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    // Parallax on the image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Fade up text
    gsap.fromTo(
      textRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto py-24 md:py-36 px-4">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
          <Image
            ref={imageRef}
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1000&auto=format&fit=crop"
            alt="Master Tailor Faisal Khan"
            fill
            className="scale-110 object-cover"
          />
        </div>
        <div ref={textRef} className="flex flex-col gap-6">
          <h2 className="font-serif text-4xl text-primary md:text-6xl">{t('heading')}</h2>
          <h3 className="font-sans text-xl text-brand uppercase tracking-widest">{t('subheading')}</h3>
          <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground">
            {t('body1')}
          </p>
          <p className="text-balance text-lg font-light leading-relaxed text-muted-foreground">
            {t('body2')}
          </p>
        </div>
      </div>
    </section>
  );
}
