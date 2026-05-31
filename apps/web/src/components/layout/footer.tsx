'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="font-serif text-2xl tracking-widest text-primary-foreground font-bold mb-4 block">
            AGGARWAL CREATIONS
          </Link>
          <p className="text-background/70 max-w-sm font-sans">
            Specializing in bridal lehengas with hand zari, dabka, and zardozi embroidery. Crafted in Patiala, shipped globally.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-primary-foreground">Quick Links</h4>
          <ul className="space-y-2 flex flex-col">
            <Link href="/collections" className="text-background/70 hover:text-primary-foreground transition-colors">Collections</Link>
            <Link href="/about" className="text-background/70 hover:text-primary-foreground transition-colors">Our Story</Link>
            <Link href="/shipping" className="text-background/70 hover:text-primary-foreground transition-colors">Shipping Info</Link>
            <Link href="/contact" className="text-background/70 hover:text-primary-foreground transition-colors">Contact</Link>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-primary-foreground">Contact</h4>
          <address className="not-italic text-background/70 space-y-2 font-sans">
            <p>Nabha Gate, Chandni Chowk</p>
            <p>Patiala, Punjab, India</p>
            <p>Open 10AM - 8PM</p>
            <p className="pt-2 text-primary-foreground font-semibold">+91 98884 33278</p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-background/10 text-center text-sm text-background/50">
        © {new Date().getFullYear()} Aggarwal Creations. All rights reserved.
      </div>
    </footer>
  );
}
