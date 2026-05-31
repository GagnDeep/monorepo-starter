import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { UserMenu } from '@/components/user-menu';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-brand">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide text-muted-foreground md:flex">
          <Link href="/" className="transition-colors hover:text-foreground">
            {t('home')}
          </Link>
          <Link href="/collections" className="transition-colors hover:text-foreground">
            {t('collections')}
          </Link>
          <Link href="/bridal" className="transition-colors hover:text-foreground">
            {t('bridal')}
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            {t('about')}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-foreground">
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
