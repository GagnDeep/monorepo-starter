'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Toronto, Canada',
    text: 'Mutiyar delivered the most beautiful custom suit for my sister\'s wedding. The vibrant magenta and intricate gold work were flawless. Perfect fit on the first try!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Simran K.',
    location: 'Patiala',
    text: 'I\'ve been going to them for years. They always meet deadlines and their modern pastel collection is just breathtaking. True international standard.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anita R.',
    location: 'Vancouver, Canada',
    text: 'Highly recommend their online consultation process. The suit arrived in Canada exactly as promised, the stitching was exquisite.',
    rating: 5,
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Loved Globally</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">See what our clients from Patiala to Canada have to say about our bespoke tailoring experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex text-accent mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-8 flex-grow opacity-90 italic">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-xl font-heading">{review.name}</p>
                <p className="text-sm opacity-70 uppercase tracking-wide mt-1">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
