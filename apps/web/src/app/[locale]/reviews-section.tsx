'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ReviewsSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal all text elements in this section
      gsap.fromTo(elementsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary text-secondary-foreground flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={elementsRef} className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            {t('reviews')}
          </h2>

          <div className="flex items-center gap-2 text-accent">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={32} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <div className="text-5xl md:text-7xl font-serif font-bold text-foreground">
            5.0
          </div>

          <p className="text-xl md:text-2xl font-medium text-muted-foreground uppercase tracking-widest">
            Based on 45 reviews
          </p>

          <blockquote className="text-lg md:text-xl italic text-foreground/80 leading-relaxed relative mt-8 before:content-['\201C'] before:absolute before:-top-6 before:-left-4 before:text-6xl before:text-primary/20 before:font-serif">
            "Heena's attention to detail and design sense is unparalleled. My customized suit was perfect down to the last stitch. The gifting outfits were beautifully packaged and loved by everyone."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
