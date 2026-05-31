import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useGsapContext(
  callback: (context: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, deps);
}
