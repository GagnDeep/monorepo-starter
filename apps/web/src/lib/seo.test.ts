import { describe, it, expect } from 'vitest';
import { buildMetadata } from './seo';

describe('buildMetadata', () => {
  it('includes the given title', () => {
    const meta = buildMetadata({ title: 'Hi', path: '/', locale: 'en' });
    const title = meta.title as { default: string };
    expect(title.default).toContain('Hi');
  });

  it('builds locale-prefixed canonical URL', () => {
    const meta = buildMetadata({ title: 'About', path: '/about', locale: 'en' });
    expect(meta.alternates?.canonical).toContain('/en/about');
  });

  it('emits hreflang languages map', () => {
    const meta = buildMetadata({ title: 'X', path: '/', locale: 'en' });
    expect(meta.alternates?.languages).toBeDefined();
    expect(meta.alternates?.languages?.['x-default']).toBeDefined();
  });
});
