import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const t = useTranslations('nav');

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-heading text-2xl font-bold text-primary">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Customised suits and exclusive stitching for women. Vibrant colors, global standards, and trendy designs delivered on time.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="w-fit transition-colors hover:text-primary">{t('home')}</Link>
              <Link href="/about" className="w-fit transition-colors hover:text-primary">{t('about')}</Link>
              <Link href="/services" className="w-fit transition-colors hover:text-primary">{t('services')}</Link>
              <Link href="/contact" className="w-fit transition-colors hover:text-primary">{t('contact')}</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-semibold">Visit Us</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Urban Estate Phase 2</p>
              <p>Patiala, Punjab</p>
              <p className="mt-2 font-medium">Mon-Sat: 11AM-2PM & 4PM-8PM</p>
              <p className="mt-2 font-medium text-foreground">+91 88926 94846</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
