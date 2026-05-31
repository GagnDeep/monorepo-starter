'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/90 backdrop-blur font-sans">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl tracking-wide font-semibold text-primary">
          Designlane Heena
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('about')}
          </Link>
          <Link href="/collections" className="hover:text-primary transition-colors">
            {t('collections')}
          </Link>
          <Link href="/consultation" className="hover:text-primary transition-colors">
            {t('consultation')}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border/40 p-4 flex flex-col gap-4 shadow-lg">
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide uppercase text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {t('home')}
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/collections" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {t('collections')}
            </Link>
            <Link href="/consultation" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {t('consultation')}
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              {t('contact')}
            </Link>
          </nav>
          <div className="flex items-center gap-4 pt-4 border-t border-border/40">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
