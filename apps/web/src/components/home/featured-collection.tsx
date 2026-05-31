'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1583391733958-6c84b162f111?q=80&w=1400&auto=format&fit=crop', alt: 'Red Festive Suit' },
  { src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1400&auto=format&fit=crop', alt: 'Gold Embroidered Suit' },
  { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1400&auto=format&fit=crop', alt: 'Designer Fabric' }
];

export function FeaturedCollection() {
  const t = useTranslations('home.featured');
  const container = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on images
    const images = gsap.utils.toArray('.featured-image');

    images.forEach((img: any, i) => {
      gsap.fromTo(img,
        { y: 50 },
        {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('description')}
            </p>
          </div>

          <div ref={imagesRef} className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className={`featured-image relative w-full aspect-[3/4] ${i === 1 ? 'md:mt-16' : ''} ${i === 2 ? 'md:mt-32' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-none"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
