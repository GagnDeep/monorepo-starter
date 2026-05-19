import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="text-muted-foreground">{t('description')}</p>
      <Button asChild>
        <Link href="/">{t('back')}</Link>
      </Button>
    </div>
  );
}
