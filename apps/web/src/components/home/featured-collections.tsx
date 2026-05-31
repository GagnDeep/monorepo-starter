'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const collections = [
  { id: 1, title: 'Vibrant Ethnics', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, title: 'Modern Pastels', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, title: 'Bridal Couture', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, title: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=1200' },
];

export function FeaturedCollections() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Determine how far to scroll horizontally
    const scrollWidth = itemsRef.current?.scrollWidth || 0;
    const clientWidth = window.innerWidth;
    const xMovement = -(scrollWidth - clientWidth + 80); // padding consideration

    if (clientWidth < 768) return; // Don't pin on mobile

    gsap.to(itemsRef.current, {
      x: xMovement,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "center center",
        end: () => `+=${scrollWidth}`,
        scrub: 0.5,
        invalidateOnRefresh: true,
      }
    });

    // Image parallax inside cards
    const cards = gsap.utils.toArray('.collection-image-inner') as HTMLElement[];
    cards.forEach((card) => {
      gsap.to(card, {
        x: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: () => `+=${scrollWidth}`,
          scrub: 0.5,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-0 md:h-screen flex flex-col justify-center bg-secondary overflow-hidden">
      <div className="container mb-8 md:mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Featured Collections</h2>
        <p className="text-muted-foreground mt-4 max-w-xl">Explore our curated selections crafted for every occasion, blending traditional motifs with international trends.</p>
      </div>

      <div ref={scrollWrapperRef} className="w-full pl-4 md:pl-8 lg:pl-16 overflow-x-auto md:overflow-visible no-scrollbar pb-8 md:pb-0">
        <div ref={itemsRef} className="flex gap-6 md:gap-12 w-[max-content]">
          {collections.map((item) => (
            <div key={item.id} className="relative group w-[280px] md:w-[450px] aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl flex-shrink-0 cursor-pointer shadow-xl">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                <div className="w-0 h-0.5 bg-accent group-hover:w-12 transition-all duration-500 delay-100"></div>
              </div>

              <div className="collection-image-inner absolute -inset-[20%] w-[140%] h-[100%]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
