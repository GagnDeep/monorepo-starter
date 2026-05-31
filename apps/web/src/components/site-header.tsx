"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export function SiteHeader() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo('.mobile-nav-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('about')}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t('contact')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LocaleSwitcher />
          <Button asChild className="bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] hover:bg-[hsl(var(--whatsapp))/0.9]">
            <a href="https://wa.me/916239303037" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/" className="mobile-nav-item hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              {t('home')}
            </Link>
            <Link href="/about" className="mobile-nav-item hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/contact" className="mobile-nav-item hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              {t('contact')}
            </Link>
          </nav>
          <div className="mobile-nav-item flex items-center gap-4 pt-4 border-t border-border">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
          <Button asChild className="mobile-nav-item w-full bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] hover:bg-[hsl(var(--whatsapp))/0.9]">
            <a href="https://wa.me/916239303037" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
