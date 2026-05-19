'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations('locale');
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  function onChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as (typeof routing.locales)[number] });
    });
  }

  return (
    <Select value={locale} onValueChange={onChange}>
      <SelectTrigger className="w-[120px]" aria-label={t('switch')}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((l) => (
          <SelectItem key={l} value={l}>
            {t(l as 'en' | 'es')}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
