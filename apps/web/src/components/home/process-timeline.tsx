'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { id: '01', title: 'Consultation', desc: 'Discuss your style, select fabrics, and take precise measurements.' },
  { id: '02', title: 'Design & Cutting', desc: 'Our master tailors draft custom patterns tailored to your unique shape.' },
  { id: '03', title: 'Stitching', desc: 'Meticulous assembly with attention to every seam and detail.' },
  { id: '04', title: 'Fitting & Delivery', desc: 'Final adjustments ensure a flawless fit before you walk out in style.' }
];

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animate the connecting line drawing down
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );

    // Stagger step reveals
    stepsRef.current.forEach((step, index) => {
      if (!step) return;
      gsap.fromTo(step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">The Art of Tailoring</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From concept to creation, experience our meticulous four-step bespoke journey.</p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          <div ref={lineRef} className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 shadow-[0_0_15px_rgba(138,40,70,0.5)]"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={el => { stepsRef.current[index] = el; }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <span className="font-heading text-6xl md:text-8xl font-bold text-muted/30 absolute -z-10 -translate-y-1/4 select-none">
                    {step.id}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
