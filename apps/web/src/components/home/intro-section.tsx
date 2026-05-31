'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Elegant text reveal
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Paragraph fade in
    gsap.from('.intro-desc', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-secondary text-secondary-foreground py-24 md:py-32">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 ref={textRef} className="font-serif text-4xl md:text-5xl font-medium mb-8">
          {t('introTitle')}
        </h2>
        <p className="intro-desc text-lg md:text-xl leading-relaxed text-secondary-foreground/80 font-serif italic">
          "{t('introText')}"
        </p>
        <div className="intro-desc mt-8 w-12 h-[1px] bg-primary mx-auto" />
      </div>
    </section>
  );
}
