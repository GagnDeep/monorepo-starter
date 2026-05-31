"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const t = useTranslations("home.cta");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(".cta-bg",
      { scale: 0.9, opacity: 0, borderRadius: "50%" },
      { scale: 1, opacity: 1, borderRadius: "1rem", duration: 1, ease: "power3.inOut" }
    )
    .fromTo(".cta-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-4 container">
      <div className="cta-bg relative bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] overflow-hidden shadow-2xl">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />

        <div className="cta-content relative z-10 px-6 py-16 md:py-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            {t("subtitle")}
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-xl bg-white text-[hsl(var(--whatsapp))] hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            <a href="https://wa.me/916239303037" target="_blank" rel="noopener noreferrer">
              {t("button")}
            </a>
          </Button>
          <p className="mt-6 text-sm text-white/80">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
