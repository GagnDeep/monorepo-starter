'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(imgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      )
      .fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.5"
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.7"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div ref={imgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop"
          alt="Bridal Lehenga"
          fill
          priority
          className="object-cover object-top opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 ref={titleRef} className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary font-bold tracking-wider mb-6">
          AGGARWAL CREATIONS
        </h1>
        <p ref={subtitleRef} className="font-sans text-lg md:text-2xl text-foreground/80 tracking-widest uppercase">
          Royal Punjabi Bridal Couture
        </p>
      </div>
    </section>
  );
}
