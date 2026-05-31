'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function SiteFooter() {
  const t = useTranslations('nav');
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-foreground text-background py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold tracking-tight uppercase">Aura</h3>
          <p className="text-background/70 text-sm max-w-xs">
            Tripuri, Patiala. Custom dresses & trending western tops. Nationwide delivery in 4 days.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold uppercase tracking-wider text-sm">Shop</h4>
          <nav className="flex flex-col gap-2 text-sm text-background/70">
            <Link href="/shop" className="hover:text-background transition-colors w-fit">All Products</Link>
            <Link href="/collections" className="hover:text-background transition-colors w-fit">Collections</Link>
            <Link href="/about" className="hover:text-background transition-colors w-fit">{t('about')}</Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold uppercase tracking-wider text-sm">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-background/70">
            <p>10AM - 9PM Daily</p>
            <a href="tel:+918171803989" className="hover:text-background transition-colors w-fit">+91 81718 03989</a>
            <p>Instagram: @auraboutique</p>
          </div>
        </div>
      </div>
      <div className="container mt-16 pt-8 border-t border-background/20 text-center text-xs text-background/50 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Aura Boutique & Fashion Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
