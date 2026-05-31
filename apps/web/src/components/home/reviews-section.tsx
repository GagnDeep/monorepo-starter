'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    text: "Kohinoor Trends made my wedding day unforgettable. The lehenga was exactly what I dreamed of, and the attention to detail was incredible. They even matched my husband's outfit perfectly!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali M.',
    text: 'My family has been shopping here since I was a little girl. Now I am buying my own bridal trousseau from them. The quality of their cotton suits and shawls is unmatched in Chandigarh.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kavita R.',
    text: 'Excellent service and a beautiful collection. The staff is very patient and helped me find the perfect outfit for my sister\'s wedding.',
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-secondary">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.review-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.review-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reviews-grid',
            start: 'top 85%',
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="review-header mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by Generations
          </h2>
          <div className="flex items-center gap-4 text-lg text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">4.0</span>
              <StarRating rating={4} />
            </div>
            <span>based on 108 reviews</span>
          </div>
        </div>

        <div className="reviews-grid grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card flex flex-col justify-between rounded-md bg-background/5 p-8 backdrop-blur-sm border border-white/10"
            >
              <div className="space-y-4">
                <StarRating rating={review.rating} />
                <p className="text-lg italic leading-relaxed text-primary-foreground/90">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-primary-foreground/60">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
