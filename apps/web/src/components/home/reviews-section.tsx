'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  { id: 1, author: 'Priya M.', text: 'Absolutely love my custom suit! The fit is perfect and the quality is outstanding.', rating: 5 },
  { id: 2, author: 'Sarah J.', text: 'Ordered from the UK and it arrived in perfect condition. Beautiful craftsmanship.', rating: 5 },
  { id: 3, author: 'Anita R.', text: 'YAVA DESIGNS is my go-to for all ethnic wear. Highly recommend their stitching services.', rating: 5 },
  { id: 4, author: 'Neha K.', text: 'Elegant designs and super fast domestic delivery. Will definitely buy again.', rating: 5 },
];

export function ReviewsSection() {
  const t = useTranslations('home');
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from('.reviews-header', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Marquee animation for reviews
    if (trackRef.current) {
      const track = trackRef.current;
      const cards = track.children;
      const totalWidth = Array.from(cards).reduce((acc, card) => acc + (card as HTMLElement).offsetWidth + 32, 0); // 32 is gap

      gsap.to(track, {
        x: -totalWidth / 2,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center reviews-header">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t('reviewsTitle')}</h2>
        <div className="flex items-center justify-center gap-2 text-lg font-medium">
          <div className="flex text-yellow-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <span>{t('reviewsSubtitle')}</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap px-4 py-8 pointer-events-none">
        {/* Double the array to create a seamless loop */}
        <div ref={trackRef} className="flex gap-8 w-max">
          {[...REVIEWS, ...REVIEWS].map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="w-[300px] md:w-[400px] flex-shrink-0 bg-background p-8 rounded-sm shadow-sm whitespace-normal">
              <div className="flex text-yellow-500 mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-foreground/80 mb-6 italic leading-relaxed">"{review.text}"</p>
              <p className="font-serif font-bold text-foreground">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
