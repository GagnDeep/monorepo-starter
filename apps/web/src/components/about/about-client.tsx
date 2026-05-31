'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

interface AboutClientProps {
  subtitle: string;
  title: string;
  body1: string;
  body2: string;
  stats: {
    rating: string;
    ratingLabel: string;
    delivery: string;
    deliveryLabel: string;
    global: string;
    globalLabel: string;
  };
}

export function AboutClient({ subtitle, title, body1, body2, stats }: AboutClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    tl.fromTo(
      textRef.current!.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    )
    .fromTo(
      imageRef.current,
      { x: 50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1 },
      "-=0.8"
    )
    .fromTo(
      statsRef.current!.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div ref={textRef} className="flex flex-col gap-6">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm">
          {subtitle}
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
          {title}
        </h1>
        <div className="w-16 h-1 bg-accent mb-4"></div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{body1}</p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{body2}</p>

        <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-10 mt-6 border-t border-border">
          <div>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stats.rating}</p>
            <p className="text-xs uppercase tracking-wider font-semibold opacity-70">{stats.ratingLabel}</p>
          </div>
          <div>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stats.delivery}</p>
            <p className="text-xs uppercase tracking-wider font-semibold opacity-70">{stats.deliveryLabel}</p>
          </div>
          <div>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{stats.global}</p>
            <p className="text-xs uppercase tracking-wider font-semibold opacity-70">{stats.globalLabel}</p>
          </div>
        </div>
      </div>

      <div ref={imageRef} className="relative aspect-[3/4] w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200"
          alt="Mutiyar Fashion Studio tailor working"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
      </div>
    </div>
  );
}
