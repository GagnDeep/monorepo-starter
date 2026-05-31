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

export function StorySection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          end: 'center center',
          scrub: 0.5,
        },
      });

      tl.fromTo('.story-header', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('.story-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, '-=0.5')
        .fromTo('.story-image', { opacity: 0, scale: 0.9, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out' }, '-=1');

      gsap.to('.story-image-inner', {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="story-header font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                A Legacy of <br/>
                <span className="text-secondary italic">Craftsmanship.</span>
              </h2>
              <div className="story-header h-1 w-20 bg-secondary" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground md:text-xl">
              <p className="story-text">
                Established in 1998 in the heart of Sector 17, Chandigarh, Kohinoor Trends has been a premier destination for exquisite women's ethnic and bridal wear for over two decades.
              </p>
              <p className="story-text">
                Our boutique is built on a foundation of trust and multi-generational appeal. We dress grandmothers, mothers, and daughters, ensuring every woman feels her absolute best for life's most precious moments.
              </p>
              <p className="story-text font-medium text-foreground">
                From elegant everyday cotton suits to bespoke bridal lehengas, every piece tells a story of timeless elegance.
              </p>
            </div>

            <div className="story-text pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center text-lg font-semibold text-brand transition-colors hover:text-brand/80"
              >
                Discover our history
                <span className="ml-2 block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="story-image relative h-[500px] w-full overflow-hidden rounded-sm lg:h-[700px]">
             <div className="story-image-inner absolute -inset-[10%] h-[120%] w-[120%]">
               <Image
                 src="https://images.unsplash.com/photo-1610030469983-98e550d615ef?q=80&w=1000&auto=format&fit=crop"
                 alt="Detail of Indian embroidery"
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover"
               />
             </div>
             <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-background/80 p-6 backdrop-blur-md">
                <p className="font-serif text-2xl font-bold text-foreground">Since 1998</p>
                <p className="text-sm text-muted-foreground">Sector 17, Chandigarh</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
