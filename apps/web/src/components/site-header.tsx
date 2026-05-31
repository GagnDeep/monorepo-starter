'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { UserMenu } from '@/components/user-menu';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function SiteHeader() {
  const t = useTranslations('nav');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
      );
    }
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground uppercase">
          Aura
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link href="/shop" className="text-foreground/70 hover:text-foreground transition-colors duration-300">
            Shop
          </Link>
          <Link href="/collections" className="text-foreground/70 hover:text-foreground transition-colors duration-300">
            Collections
          </Link>
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors duration-300">
            {t('about')}
          </Link>
          <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors duration-300">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <UserMenu />
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
