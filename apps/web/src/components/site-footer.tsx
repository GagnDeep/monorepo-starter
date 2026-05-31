import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function SiteFooter() {
  const t = useTranslations('nav');

  return (
    <footer className="border-t border-border/40 bg-background py-12 font-sans">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-xl font-semibold text-primary">
            Designlane Heena
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            A designer boutique in Sector 17, Chandigarh. Specializing in customized stitched suits, thoughtful design consultation, and elegant gifting outfits.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg font-medium">Explore</h3>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">{t('home')}</Link>
            <Link href="/about" className="hover:text-primary transition-colors">{t('about')}</Link>
            <Link href="/collections" className="hover:text-primary transition-colors">{t('collections')}</Link>
            <Link href="/consultation" className="hover:text-primary transition-colors">{t('consultation')}</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">{t('contact')}</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-lg font-medium">Visit Us</h3>
          <address className="not-italic text-sm text-muted-foreground flex flex-col gap-2">
            <p>Sector 17, Near Neelam Theatre</p>
            <p>Chandigarh</p>
            <p className="mt-2 text-foreground font-medium">Hours: 10AM - 7PM Daily</p>
            <p className="text-foreground font-medium">Contact: +91 88473 63944</p>
          </address>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Designlane Heena. All rights reserved.</p>
      </div>
    </footer>
  );
}
