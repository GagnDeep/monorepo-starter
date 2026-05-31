'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGsapContext } from '@/hooks/use-gsap';
import gsap from 'gsap';

export function CollectionsSection() {
  const t = useTranslations('home.collections');
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      id: 'suits',
      title: t('items.suits.title'),
      image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'sherwanis',
      title: t('items.sherwanis.title'),
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'kurta',
      title: t('items.kurta.title'),
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  useGsapContext(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const panels = gsap.utils.toArray('.collection-panel');

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${containerRef.current?.offsetWidth}`,
      },
    });
  }, [t]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-secondary">
      <div className="absolute top-12 left-0 w-full z-10 px-8 md:px-16">
        <h2 className="font-serif text-4xl text-foreground md:text-6xl">{t('heading')}</h2>
      </div>

      <div ref={containerRef} className="flex h-full w-[300vw] sm:w-[300vw] lg:w-[250vw]">
        {collections.map((item) => (
          <div
            key={item.id}
            className="collection-panel relative flex h-full w-screen items-center justify-center p-8 md:p-24"
          >
            <div className="relative h-[60vh] w-full max-w-4xl overflow-hidden rounded-sm shadow-2xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-serif text-3xl text-white drop-shadow-md md:text-5xl">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
