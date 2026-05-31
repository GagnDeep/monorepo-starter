'use client';

import { useRef } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function BridalSection() {
  const container = useRef<HTMLElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pin the left column while the right scrolls on desktop
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: container.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftCol.current,
        });
      });

      // Simple fade ins for content
      gsap.utils.toArray('.bridal-item').forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left Column - Pinned */}
          <div className="flex flex-col justify-center py-24 lg:h-screen lg:py-0" ref={leftCol}>
            <div className="max-w-md space-y-6">
              <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Bespoke Bridal. <br/>
                <span className="text-brand">Perfectly Matched.</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your wedding day deserves perfection. We specialize in custom bridal lehengas that are intricately designed and perfectly coordinated with the groom's outfit.
              </p>
              <div className="pt-4">
                <Link
                  href="/bridal"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-brand px-8 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  Explore Bridal Wear
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="flex flex-col gap-12 py-12 lg:py-24" ref={rightCol}>
            <div className="bridal-item space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
                  alt="Bridal Lehenga"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold">The Bride</h3>
              <p className="text-muted-foreground">Exquisite hand-embroidery and premium fabrics tailored to your exact measurements.</p>
            </div>

            <div className="bridal-item space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1629851609176-a4cba8f07cc0?q=80&w=1000&auto=format&fit=crop"
                  alt="Groom Coordination"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Groom Coordination</h3>
              <p className="text-muted-foreground">We meticulously match colors, motifs, and fabrics to ensure the groom's attire complements the bridal lehenga perfectly.</p>
            </div>

            <div className="bridal-item space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1000&auto=format&fit=crop"
                  alt="Bridal Accessories"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-semibold">The Trousseau</h3>
              <p className="text-muted-foreground">Complete your bridal wardrobe with our curated selection of pre-wedding and post-wedding ensembles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
