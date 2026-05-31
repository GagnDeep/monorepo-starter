'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Text fade in
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Image parallax
      gsap.fromTo(
        imageRef.current.querySelector('img'),
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="order-2 lg:order-1 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">The Art of Zardozi</h2>
            <div className="w-16 h-1 bg-secondary"></div>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              At Aggarwal Creations, we preserve the centuries-old tradition of hand embroidery.
              Our skilled artisans meticulously weave intricate patterns using Zari, Dabka, and Zardozi techniques.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed">
              Each garment is a masterpiece, requiring hundreds of hours of dedicated craftsmanship to create the perfect bridal ensemble that you will cherish forever.
            </p>
          </div>
          <div ref={imageRef} className="order-1 lg:order-2 relative h-[600px] w-full overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1583391733958-65e298dd9e96?q=80&w=2000&auto=format&fit=crop"
              alt="Craftsmanship details"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
