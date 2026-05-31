'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
}

interface ServicesClientProps {
  subtitle: string;
  title: string;
  items: ServiceItem[];
}

export function ServicesClient({ subtitle, title, items }: ServicesClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(
      headerRef.current!.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15 }
    );

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      tl.fromTo(
        item,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        "-=0.6"
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
          {subtitle}
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
          {title}
        </h1>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {items.map((item, index) => (
          <div
            key={index}
            ref={el => { itemsRef.current[index] = el; }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
          >
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-8xl font-heading font-black text-muted/30 absolute -z-10 -translate-x-8 -translate-y-8 select-none">
                0{index + 1}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {item.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
