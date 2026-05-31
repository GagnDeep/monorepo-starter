"use client";

import { useTranslations } from "next-intl";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
    alt: "Classic Nehru Jacket",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=1000&auto=format&fit=crop",
    alt: "Bespoke Tailoring Details",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1000&auto=format&fit=crop",
    alt: "Pathani Kurta Design",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function GalleryPreviewSection() {
  const t = useTranslations('home');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".gallery-header", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".gallery-image",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Text Content */}
          <div className="lg:w-1/3 gallery-header">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Craftsmanship <br/> in Detail
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Explore our portfolio of meticulously crafted Pathani kurtas and Nehru jackets. Every stitch tells a story of dedication to the art of tailoring.
            </p>
            <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-white rounded-none px-8">
              <Link href="/gallery">{t('gallery.button')}</Link>
            </Button>
          </div>

          {/* Image Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[600px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group gallery-image ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
