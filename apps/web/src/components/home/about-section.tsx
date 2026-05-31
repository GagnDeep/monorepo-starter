"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const t = useTranslations("home.about");
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pinning the image while text scrolls
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".about-image-container",
      pinSpacing: false,
    });

    // Reveal text paragraphs as they scroll into view
    const paragraphs = gsap.utils.toArray('.about-text p');
    paragraphs.forEach((p: any) => {
      gsap.fromTo(p,
        { opacity: 0.2, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start relative min-h-[120vh]">

          {/* Pinned Image Container */}
          <div className="about-image-container hidden md:block relative h-screen w-full pt-24 pb-12">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop"
                alt="Master Tailor at work"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Scrolling Text Content */}
          <div ref={textContainerRef} className="about-text py-24 md:py-[30vh] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-primary">
              {t("title")}
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-2xl font-serif leading-relaxed mb-8">
                {t("p1")}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t("p2")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("p3")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
