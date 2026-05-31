import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const t = useTranslations('nav');

  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-4 text-primary">{siteConfig.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Designer suit boutique specializing in stitched and unstitched fabrics.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">{t('home')}</Link></li>
            <li><Link href="/collection" className="hover:text-foreground">{t('collection')}</Link></li>
            <li><Link href="/services" className="hover:text-foreground">{t('services')}</Link></li>
            <li><Link href="/about" className="hover:text-foreground">{t('about')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
            <li>{siteConfig.contact.hours}</li>
            <li><Link href="/contact" className="hover:text-foreground">{t('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
