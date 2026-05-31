import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const t = useTranslations('footer');

  return (
    <footer className="w-full border-t border-border bg-background py-12 text-sm text-muted-foreground">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </Link>
          <p className="max-w-xs">{t('description')}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-foreground uppercase tracking-widest">{t('links')}</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/collections" className="hover:text-primary transition-colors">{t('collections')}</Link>
            <Link href="/custom-stitching" className="hover:text-primary transition-colors">{t('customStitching')}</Link>
            <Link href="/shipping" className="hover:text-primary transition-colors">{t('shipping')}</Link>
            <Link href="/about" className="hover:text-primary transition-colors">{t('about')}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">{t('contact')}</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-foreground uppercase tracking-widest">{t('visitUs')}</h3>
          <address className="not-italic flex flex-col gap-1">
            <p>Sector 22C</p>
            <p>Chandigarh</p>
            <p>Mon-Sat 10AM-7PM</p>
            <p className="mt-2 font-medium text-foreground">+91 78377 77758</p>
          </address>
        </div>
      </div>
      <div className="container mt-12 flex items-center justify-between border-t border-border/40 pt-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. {t('rights')}</p>
      </div>
    </footer>
  );
}
