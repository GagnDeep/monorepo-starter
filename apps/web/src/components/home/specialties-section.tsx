"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function SpecialtiesSection() {
  const t = useTranslations("home.specialties");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.specialty-card');

    gsap.fromTo(
      ".specialties-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".specialties-grid",
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="specialties" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="specialties-title text-4xl md:text-5xl font-serif font-bold mb-4">{t("title")}</h2>
          <p className="specialties-title text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="specialties-grid grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Pathani Kurta */}
          <Card className="specialty-card overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
            <div className="relative h-[400px] w-full overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1000&auto=format&fit=crop"
                alt="Pathani Kurta"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{t("item1Title")}</h3>
                <p className="text-white/80">{t("item1Desc")}</p>
              </div>
            </div>
          </Card>

          {/* Nehru Jacket */}
          <Card className="specialty-card overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
            <div className="relative h-[400px] w-full overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1000&auto=format&fit=crop"
                alt="Nehru Jacket"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{t("item2Title")}</h3>
                <p className="text-white/80">{t("item2Desc")}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
