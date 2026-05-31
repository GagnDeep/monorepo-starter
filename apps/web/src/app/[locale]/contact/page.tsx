import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Contact Us', path: '/contact', locale });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <div className="container py-20 text-center text-4xl font-bold tracking-tighter">Contact Us</div>;
}
