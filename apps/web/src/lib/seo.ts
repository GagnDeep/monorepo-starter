import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

type BuildMetadataInput = {
  title: string;
  description?: string;
  /** Path WITHOUT the locale prefix, e.g. "/about" or "/". */
  path: string;
  locale: string;
  image?: string;
  noIndex?: boolean;
};

function withLocale(path: string, locale: string) {
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean}`;
}

function abs(url: string) {
  const base = siteConfig.url.replace(/\/$/, '');
  return `${base}${url.startsWith('/') ? url : `/${url}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  image,
  noIndex,
}: BuildMetadataInput): Metadata {
  const desc = description ?? siteConfig.description[locale] ?? siteConfig.description.en!;
  const canonicalPath = withLocale(path, locale);
  const canonical = abs(canonicalPath);

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = abs(withLocale(path, l));
  }
  languages['x-default'] = abs(withLocale(path, routing.defaultLocale));

  const ogImage =
    image ??
    abs(`/og?title=${encodeURIComponent(title)}&locale=${encodeURIComponent(locale)}`);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s · ${siteConfig.name}` },
    description: desc,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: siteConfig.name,
      title,
      description: desc,
      locale,
      images: [{ url: ogImage, width: siteConfig.og.width, height: siteConfig.og.height }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage],
      site: siteConfig.social.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
