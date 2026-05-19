import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-foreground">
            {t('about')}
          </Link>
          <Link href="/sign-in" className="hover:text-foreground">
            {t('signIn')}
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
