'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export function HeroAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial state
      gsap.set('.hero-title > span', { y: 30, opacity: 0 });
      gsap.set('.hero-title', { y: 50, opacity: 0 });
      gsap.set('.hero-text', { y: 30, opacity: 0 });
      gsap.set('.hero-cta > *', { y: 20, opacity: 0 });

      // Create a timeline for choreographed reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero-title > span', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2
      })
      .to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }, '-=0.8')
      .to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 1,
      }, '-=1')
      .to('.hero-cta > *', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      }, '-=0.6');
    });

    return () => ctx.revert();
  }, []);

  return null;
}
