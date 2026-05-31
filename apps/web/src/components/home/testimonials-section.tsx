"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const getTestimonials = (t: any) => [
  {
    quote: t('testimonials.t1Quote'),
    name: t('testimonials.t1Name'),
    rating: 5,
  },
  {
    quote: t('testimonials.t2Quote'),
    name: t('testimonials.t2Name'),
    rating: 5,
  },
  {
    quote: t('testimonials.t3Quote'),
    name: t('testimonials.t3Name'),
    rating: 5,
  }
];

export function TestimonialsSection() {
  const t = useTranslations('home');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".testimonial-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".testimonial-card",
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16 testimonial-header">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            5.0★ Rated by Our Clients
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied clients from Patiala and beyond have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getTestimonials(t).map((t, i) => (
            <Card key={i} className="testimonial-card p-8 bg-white border border-gray-100 shadow-xl shadow-gray-200/40">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="font-bold text-foreground">- {t.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
