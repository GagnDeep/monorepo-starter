'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INSTA_IMAGES = [
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583391733958-6c84b162f111?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800&auto=format&fit=crop'
];

export function InstagramFeed() {
  const t = useTranslations('home.instagram');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.insta-img',
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('title')}
        </h2>
        <p className="text-muted-foreground mb-12">
          {t('handle')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTA_IMAGES.map((src, i) => (
            <div key={i} className="insta-img relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl">♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
