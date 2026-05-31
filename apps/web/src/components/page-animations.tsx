'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export function PageAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-page-content',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return null;
}
