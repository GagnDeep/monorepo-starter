'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    text: "The custom blouse stitching is flawless. Deepika understood exactly what I wanted. Shipped to Mumbai in just 3 days!",
    author: "Priya S.",
    location: "Mumbai"
  },
  {
    text: "Aura Boutique is my go-to for western tops. The quality is amazing and the styles are always on-trend.",
    author: "Neha R.",
    location: "Delhi"
  },
  {
    text: "Absolutely love the custom ethnic dress I got for my sister's wedding. The fit was perfect on the first try.",
    author: "Simran K.",
    location: "Chandigarh"
  }
];

export function Reviews() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reviewsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo(
        reviewsRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none mb-6">
              Words of<br/>Praise
            </h2>
            <div className="inline-flex items-center gap-2 bg-background text-foreground px-4 py-2 text-sm font-bold tracking-widest uppercase">
              <span className="text-xl">★</span> 5.0 Average
            </div>
            <p className="mt-4 text-primary-foreground/70 text-sm font-medium uppercase tracking-widest">Based on 28+ Reviews</p>
          </div>

          <div className="md:w-2/3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <div
                key={i}
                ref={(el) => { reviewsRef.current[i] = el; }}
                className="bg-primary-foreground/10 p-8 border border-primary-foreground/20 backdrop-blur-sm"
              >
                <div className="text-primary-foreground mb-4">★★★★★</div>
                <p className="font-serif text-lg leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">{review.author}</p>
                  <p className="text-primary-foreground/60 text-xs uppercase tracking-widest mt-1">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
