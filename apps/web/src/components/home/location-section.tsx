'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function LocationSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
      });

      tl.fromTo(
        '.loc-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      )
      .fromTo(
        '.loc-info',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.loc-image',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-primary/5 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="loc-header font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Visit Our Boutique
              </h2>
              <p className="loc-header text-lg text-muted-foreground">
                Experience the elegance of our collections in person at our flagship store in Chandigarh.
              </p>
            </div>

            <div className="space-y-6">
              <div className="loc-info flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Location</h3>
                  <p className="text-muted-foreground mt-1">
                    Sector 17, Chandigarh<br />
                    Punjab, India
                  </p>
                </div>
              </div>

              <div className="loc-info flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Hours</h3>
                  <p className="text-muted-foreground mt-1">
                    Monday – Sunday<br />
                    11:00 AM – 8:45 PM
                  </p>
                </div>
              </div>

              <div className="loc-info flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Contact</h3>
                  <p className="text-muted-foreground mt-1">
                    +91 172 270 2061
                  </p>
                </div>
              </div>
            </div>

            <div className="loc-info pt-4">
              <a
                href="https://maps.google.com/?q=Kohinoor+Trends+Sector+17+Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="loc-image relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop"
              alt="Boutique Interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
