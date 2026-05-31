import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('home')}
          </Link>
          <Link href="/collection" className="hover:text-foreground transition-colors">
            {t('collection')}
          </Link>
          <Link href="/services" className="hover:text-foreground transition-colors">
            {t('services')}
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            {t('about')}
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
