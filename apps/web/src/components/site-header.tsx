import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-primary">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            {t('home')}
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            {t('about')}
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            {t('services')}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
