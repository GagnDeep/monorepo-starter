import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  return (
    <footer className="w-full border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            {tFooter('description')}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">{tFooter('links')}</h3>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">{tNav('home')}</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">{tNav('about')}</Link>
            <Link href="/collections" className="hover:text-foreground transition-colors">{tNav('collections')}</Link>
            <Link href="/measurements" className="hover:text-foreground transition-colors">{tNav('measurements')}</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">{tNav('contact')}</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">{tFooter('contact')}</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>{tFooter('address')}</p>
            <p>{tFooter('phone')}</p>
            <p>{tFooter('hours')}</p>
          </div>
        </div>
      </div>

      <div className="container mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground">
        <p>{tFooter('rights')}</p>
      </div>
    </footer>
  );
}
