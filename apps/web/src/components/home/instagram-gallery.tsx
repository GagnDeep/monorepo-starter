'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
];

export function InstagramGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        const speed = i % 2 === 0 ? 0.05 : -0.05;

        gsap.to(img, {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10 text-center mb-16">
        <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none mb-4">
          @auraboutique
        </h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
        >
          Follow Our Journey <span className="text-xl">↗</span>
        </a>
      </div>

      <div className="container-fluid px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-[60vh] md:h-[80vh]">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${i % 2 === 0 ? 'mt-12 md:mt-24' : 'mb-12 md:mb-24'}`}
            >
              <div
                ref={(el) => { imagesRef.current[i] = el; }}
                className="absolute -inset-10" // Extra space for parallax
              >
                <Image
                  src={src}
                  alt="Instagram feed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white text-3xl">♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
