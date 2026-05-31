"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const t = useTranslations("home");
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on image
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Kinetic typography intro
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text-line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
    ).fromTo(
      ".hero-btn",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative w-full h-[130%] -top-[15%]">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop"
            alt="Tailoring Workshop"
            fill
            className="object-cover opacity-30 dark:opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div ref={textRef} className="container relative z-10 text-center px-4 max-w-4xl">
        <div className="overflow-hidden mb-4">
          <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground">
            {t("heroLine1")}
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-primary">
            {t("heroLine2")}
          </h1>
        </div>

        <div className="overflow-hidden mb-12 max-w-2xl mx-auto">
          <p className="hero-text-line text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="hero-btn text-lg h-14 px-8 bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))/0.9] text-[hsl(var(--whatsapp-foreground))] shadow-lg hover:shadow-xl transition-all">
            <a href="https://wa.me/916239303037" target="_blank" rel="noopener noreferrer">
              {t("ctaPrimary")}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="hero-btn text-lg h-14 px-8 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
            <a href="#specialties">
              {t("ctaSecondary")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
