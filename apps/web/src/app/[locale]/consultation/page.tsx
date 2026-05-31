import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumb } from '@/lib/jsonld';
import Image from 'next/image';
import { PageAnimations } from '@/components/page-animations';
import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'consultation' });
  return buildMetadata({ title: t('title'), description: t('description'), path: '/consultation', locale });
}

export default async function ConsultationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('consultation');
  const nav = await getTranslations('nav');

  return (
    <>
      <PageAnimations />
      <article className="container mx-auto py-24 md:py-32 animate-page-content">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-primary font-medium">{t('title')}</h1>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=2670&auto=format&fit=crop"
              alt="Design consultation"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium">Your Vision, Our Expertise</h2>
            <div className="prose prose-lg dark:prose-invert font-sans text-muted-foreground leading-relaxed">
              <p>
                A great design starts with a conversation. During your personalized consultation, Heena will sit down with you to understand your style, preferences, and the occasion.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Fabric selection and sourcing</li>
                <li>Silhouette and cut recommendations</li>
                <li>Embroidery and embellishment design</li>
                <li>Fittings and alterations planning</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 rounded-xl border border-border mt-4">
               <h3 className="font-serif text-2xl text-foreground mb-4">Book Your Appointment</h3>
               <p className="text-muted-foreground mb-6">Call us directly to schedule your private session at our Sector 17 boutique.</p>
               <Button size="lg" className="w-full sm:w-auto rounded-full px-8 font-semibold tracking-wide uppercase">
                  Call +91 88473 63944
               </Button>
            </div>
          </div>
        </div>

        <JsonLd
          data={breadcrumb(
            [
              { name: nav('home'), path: '/' },
              { name: t('title'), path: '/consultation' },
            ],
            locale,
          )}
        />
      </article>
    </>
  );
}
