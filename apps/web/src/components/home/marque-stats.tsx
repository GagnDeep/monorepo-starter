'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
  "Nationwide Delivery in 4 Days",
  "•",
  "5.0★ Rated by 28+ Clients",
  "•",
  "Custom Blouse Stitching",
  "•",
  "Tripuri, Patiala",
  "•"
];

export function MarqueeStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    // Duplicate content for seamless loop
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-6 border-y border-border/20 bg-secondary overflow-hidden">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap items-center w-max"
      >
        {/* Double array for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`inline-block px-8 uppercase tracking-widest text-sm font-semibold ${item === '•' ? 'text-primary' : 'text-foreground'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
