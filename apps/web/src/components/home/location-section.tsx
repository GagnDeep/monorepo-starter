"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Phone } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function LocationSection() {
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

      tl.from(".location-text", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".location-card",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      ).from(
        ".location-map",
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Info Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="location-text mb-10">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Visit Our Studio
              </h2>
              <p className="text-lg text-foreground/70">
                Located in the vibrant {t('location.addressDesc1')}, our studio is where your sartorial vision comes to life.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="location-card p-6 flex items-start gap-4 border-none shadow-sm bg-background/50">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('location.addressTitle')}</h3>
                  <p className="text-foreground/70">
                    {t('location.addressDesc1')}<br />
                    {t('location.addressDesc2')}
                  </p>
                </div>
              </Card>

              <Card className="location-card p-6 flex items-start gap-4 border-none shadow-sm bg-background/50">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('location.hoursTitle')}</h3>
                  <p className="text-foreground/70">
                    {t('location.hoursDesc1')}<br />
                    <span className="text-sm italic opacity-80">{t('location.hoursDesc2')}</span>
                  </p>
                </div>
              </Card>

              <Card className="location-card p-6 flex items-start gap-4 border-none shadow-sm bg-background/50">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t('location.contactTitle')}</h3>
                  <p className="text-foreground/70">
                    {t('location.contactDesc1')}<br />
                    {t('location.contactDesc2')}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Map Side (Stylized Placeholder for now) */}
          <div className="lg:w-1/2 location-map min-h-[400px] bg-foreground rounded-xl relative overflow-hidden flex items-center justify-center">
             {/* In a real scenario, an iframe or map library goes here. For aesthetic purposes, we use a styled block */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
             <div className="relative z-10 text-center text-background p-8 border border-primary/30 backdrop-blur-sm rounded-lg max-w-sm">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2">Purba Fashion Makers</h3>
                <p className="opacity-80">Urban Estate Phase 1, Patiala</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
