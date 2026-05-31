import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { UserMenu } from '@/components/user-menu';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            {t('about')}
          </Link>
          <Link href="/collections" className="hover:text-foreground transition-colors">
            {t('collections')}
          </Link>
          <Link href="/measurements" className="hover:text-foreground transition-colors">
            {t('measurements')}
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <UserMenu />
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
