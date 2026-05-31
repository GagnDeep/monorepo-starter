import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';

export function SiteFooter() {
  const t = useTranslations('nav');
  const footerT = useTranslations('footer');

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-brand">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-muted-foreground">
            {footerT('description')}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{footerT('collections')}</h3>
          <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground">
            {t('collections')}
          </Link>
          <Link href="/bridal" className="text-sm text-muted-foreground hover:text-foreground">
            {t('bridal')}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{footerT('company')}</h3>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            {t('about')}
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            {t('contact')}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{footerT('visitUs')}</h3>
          <p className="text-sm text-muted-foreground">Sector 17, Chandigarh</p>
          <p className="text-sm text-muted-foreground">Open 11AM - 8:45PM daily</p>
          <p className="text-sm text-muted-foreground">+91 172 270 2061</p>
        </div>
      </div>

      <div className="container mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Established 1998</p>
      </div>
    </footer>
  );
}
