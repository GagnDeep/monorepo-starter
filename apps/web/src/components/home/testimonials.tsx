'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current!.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div ref={contentRef} className="space-y-8">
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">4.9/5 Average Rating</h2>
          <p className="font-sans text-lg text-muted-foreground">Based on 576 reviews from our beautiful brides.</p>

          <div className="pt-8 border-t border-border/50">
            <h3 className="font-serif text-2xl mb-4">Visit Our Boutique</h3>
            <p className="font-sans text-lg mb-2">Nabha Gate, Chandni Chowk, Patiala</p>
            <p className="font-sans text-lg mb-6">Open Daily: 10:00 AM - 8:00 PM</p>
            <div className="flex justify-center gap-4">
               <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                 <Link href="/contact">Book an Appointment</Link>
               </Button>
               <Button asChild variant="outline" size="lg">
                 <a href="tel:+919888433278">Call +91 98884 33278</a>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
