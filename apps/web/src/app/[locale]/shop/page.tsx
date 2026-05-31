import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Shop', path: '/shop', locale });
}

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <div className="container py-20 text-center text-4xl font-bold tracking-tighter">Shop</div>;
}
