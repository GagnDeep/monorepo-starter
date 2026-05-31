'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!navRef.current) return;

    // Simple fade in from top
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest text-primary font-bold">
          AGGARWAL CREATIONS
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-primary ${isActive ? 'text-primary font-semibold' : 'text-foreground/80'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  );
}
