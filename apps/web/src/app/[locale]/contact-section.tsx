'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned/Parallax effect for image and content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      tl.fromTo(imageRef.current,
        { y: 50, scale: 1.1 },
        { y: 0, scale: 1, ease: 'power1.out' }
      );

      gsap.fromTo(infoRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Info Side */}
          <div ref={infoRef} className="flex flex-col gap-8 order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-medium">
              {t('visitUs')}
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Location</h4>
                <p className="text-foreground">Sector 17, Near Neelam Theatre</p>
                <p>Chandigarh</p>
              </div>

              <div className="w-16 h-px bg-border my-6" />

              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Hours</h4>
                <p className="text-foreground">10:00 AM - 7:00 PM</p>
                <p>Open Daily</p>
              </div>

              <div className="w-16 h-px bg-border my-6" />

              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</h4>
                <p className="text-foreground font-serif text-2xl">+91 88473 63944</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 md:order-2 h-full min-h-[500px] relative rounded-3xl overflow-hidden shadow-xl">
             <div ref={imageRef} className="absolute inset-0 w-full h-full">
               <Image
                  src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2515&auto=format&fit=crop"
                  alt="Chandigarh Boutique"
                  fill
                  className="object-cover"
                />
             </div>
             {/* Gradient overlay for blending */}
             <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
