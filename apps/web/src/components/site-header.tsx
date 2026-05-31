import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleSwitcher } from '@/components/locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/90 backdrop-blur font-sans">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl tracking-wide font-semibold text-primary">
          Designlane Heena
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t('about')}
          </Link>
          <Link href="/collections" className="hover:text-primary transition-colors">
            Collections
          </Link>
          <Link href="/consultation" className="hover:text-primary transition-colors">
            Consultation
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
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
