"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Scissors, Ruler, Shirt, CheckCircle } from "lucide-react";
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

const getSteps = (t: any) => [
  {
    icon: Scissors,
    title: `1. ${t('process.step1Title')}`,
    description: t('process.step1Desc'),
  },
  {
    icon: Ruler,
    title: `2. ${t('process.step2Title')}`,
    description: t('process.step2Desc'),
  },
  {
    icon: Shirt,
    title: `3. ${t('process.step3Title')}`,
    description: t('process.step3Desc'),
  },
  {
    icon: CheckCircle,
    title: `4. ${t('process.step4Title')}`,
    description: t('process.step4Desc'),
  },
];

export function ProcessSection() {
  const t = useTranslations('home');
  const containerRef = useRef<HTMLElement>(null);
  const steps = getSteps(t);

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

      tl.from(".process-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".process-step",
        {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-foreground text-background overflow-hidden"
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16 process-title">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('process.title')}
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Experience seamless custom tailoring from consultation to final fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="process-step bg-white/5 border-white/10 p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="opacity-70 leading-relaxed">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
