'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COLLECTIONS = [
  {
    id: 1,
    title: 'Bridal Elegance',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2883&auto=format&fit=crop',
    href: '/collections'
  },
  {
    id: 2,
    title: 'Festive Wear',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2938&auto=format&fit=crop',
    href: '/collections'
  },
  {
    id: 3,
    title: 'Daily Classics',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2874&auto=format&fit=crop',
    href: '/collections'
  }
];

export function CollectionsSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.collection-header', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.collection-card', {
      scrollTrigger: {
        trigger: '.collection-grid',
        start: 'top 75%',
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="collection-header mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('collectionsTitle')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('collectionsSubtitle')}</p>
        </div>

        <div className="collection-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection) => (
            <Link key={collection.id} href={collection.href} className="collection-card group block relative overflow-hidden aspect-[3/4]">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-serif text-2xl text-white mb-2 drop-shadow-md">{collection.title}</h3>
                <div className="h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
