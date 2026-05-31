'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutPreview() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'center center',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -50, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      { opacity: 1, x: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, ease: 'power3.out' }
    )
    .fromTo(
      contentRef.current!.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' },
      '-=1'
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={imageRef} className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=1200"
            alt="Stitching detail"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>

        <div ref={contentRef} className="flex flex-col gap-6 max-w-xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            A Legacy of <br className="hidden md:block"/> Perfect Fits.
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
            {t('body')}
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50 mt-4">
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">4.6★</p>
              <p className="text-sm uppercase tracking-wider font-semibold opacity-70">Client Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-heading font-bold text-primary mb-2">100%</p>
              <p className="text-sm uppercase tracking-wider font-semibold opacity-70">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
