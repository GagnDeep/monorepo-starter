import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Custom tailoring shop in Urban Estate Phase 1 Market, Patiala.
              Specializing in Pathani kurtas and Nehru jackets.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>📍 Urban Estate Phase 1 Market, Patiala</p>
              <p>⏰ 10:00 AM - 8:00 PM (Hours may vary)</p>
              <p>📞 +91 62393 03037</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
