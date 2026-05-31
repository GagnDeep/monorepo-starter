'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Heritage() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        {
          y: 50,
          opacity: 0
        },
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div ref={contentRef} className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Our Heritage</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
          <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed">
            Located near the historic Nabha Gate in Chandni Chowk, Patiala, Aggarwal Creations has been a beacon of traditional Punjabi bridal couture.
            We specialize in crafting exquisite bridal lehengas that embody the royal elegance of Punjab.
          </p>
          <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed">
            Our master artisans pour generations of skill into every piece, ensuring that your special day is adorned with authenticity, grace, and unparalleled craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
