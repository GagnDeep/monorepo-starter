'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function NewsletterSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.nl-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative py-24 md:py-32 bg-brand text-brand-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="nl-content font-serif text-3xl font-bold tracking-tight sm:text-5xl">
            Join the Kohinoor Family
          </h2>
          <p className="nl-content text-brand-foreground/80 text-lg">
            Subscribe to receive updates on new collections, exclusive bridal showcases, and seasonal offers.
          </p>

          <form className="nl-content mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-12 w-full rounded-md border border-brand-foreground/20 bg-brand-foreground/10 px-4 py-2 text-brand-foreground placeholder:text-brand-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-foreground/50"
              required
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-md bg-brand-foreground px-8 text-sm font-medium text-brand transition-colors hover:bg-brand-foreground/90 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="nl-content text-xs text-brand-foreground/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
