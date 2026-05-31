'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  { text: "The festive collection is absolutely stunning. Perfect fit on the first try!", author: "Priya S." },
  { text: "Delivered exactly on time for my cousin's wedding. The embroidery work is top-notch.", author: "Neha M." },
  { text: "Beautiful unstitched fabrics and the staff is so helpful in suggesting designs.", author: "Simran K." }
];

export function ReviewsSection() {
  const t = useTranslations('home.reviews');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.review-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%'
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <div className="flex items-center justify-center gap-2 text-2xl font-serif">
            <span className="text-secondary">★★★★★</span>
            <span>4.9 / 5</span>
          </div>
          <p className="mt-2 text-primary-foreground/80">Based on 50+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review, i) => (
            <div key={i} className="review-item text-left p-8 border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm">
              <p className="text-lg font-serif italic mb-6">"{review.text}"</p>
              <p className="font-bold text-secondary uppercase tracking-wider text-sm">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
