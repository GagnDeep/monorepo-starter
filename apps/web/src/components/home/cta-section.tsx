'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '@/i18n/navigation';

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.fromTo(
        textRef.current,
        { scale: 0.8, opacity: 0, rotateX: 45 },
        { scale: 1, opacity: 1, rotateX: 0, duration: 1.2, ease: 'back.out(1.2)' }
      ).fromTo(
        btnRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-secondary relative overflow-hidden flex flex-col items-center justify-center text-center perspective-1000">
      <div className="container relative z-10">
        <h2
          ref={textRef}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-12"
          style={{ transformOrigin: 'center bottom' }}
        >
          Redefine<br/>Your Style
        </h2>

        <div ref={btnRef}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-foreground text-background px-12 py-5 text-sm font-bold uppercase tracking-widest transition-transform hover:scale-105 hover:bg-primary hover:text-primary-foreground duration-300"
          >
            Book a Consultation
          </Link>
          <p className="mt-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Or reach out via WhatsApp at +91 81718 03989
          </p>
        </div>
      </div>
    </section>
  );
}
