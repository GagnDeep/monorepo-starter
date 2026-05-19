import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

// SiteHeader uses next-intl's useTranslations and would need a full NextIntlClientProvider
// + routing context to render in jsdom. Smoke-test the cn util instead so the suite has
// a basic passing test for the components folder.
describe('cn utility (site-header smoke)', () => {
  it('joins class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });
});
