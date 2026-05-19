import { siteConfig } from '@/config/site';

function abs(path: string) {
  const base = siteConfig.url.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: abs('/icon.png'),
    sameAs: [],
  };
}

export function website(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: abs(`/${locale}`),
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: abs(`/${locale}/search?q={search_term_string}`),
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumb(items: Array<{ name: string; path: string }>, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: abs(`/${locale}${item.path.startsWith('/') ? item.path : `/${item.path}`}`),
    })),
  };
}

export function article(input: {
  title: string;
  description: string;
  path: string;
  locale: string;
  publishedAt: Date | string;
  updatedAt?: Date | string;
  authorName?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    inLanguage: input.locale,
    datePublished: new Date(input.publishedAt).toISOString(),
    dateModified: new Date(input.updatedAt ?? input.publishedAt).toISOString(),
    author: { '@type': 'Person', name: input.authorName ?? siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: abs('/icon.png') },
    },
    mainEntityOfPage: abs(`/${input.locale}${input.path}`),
    image: input.image ? [input.image] : undefined,
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
