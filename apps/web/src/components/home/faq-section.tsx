"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

const getFaqs = (t: any) => [
  {
    q: t('faq.q1'),
    a: t('faq.a1'),
  },
  {
    q: t('faq.q2'),
    a: t('faq.a2'),
  },
  {
    q: t('faq.q3'),
    a: t('faq.a3'),
  },
  {
    q: t('faq.q4'),
    a: t('faq.a4'),
  }
];

export function FaqSection() {
  const t = useTranslations('home');
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".faq-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".faq-item",
        {
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16 faq-title">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about our tailoring services.
          </p>
        </div>

        <div className="space-y-4">
          {getFaqs(t).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-item border border-gray-200 bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 py-4 border-t border-gray-100" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
