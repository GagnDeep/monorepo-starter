import { z } from 'zod';
import { getTranslations } from 'next-intl/server';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { log } from '@/lib/log';
import { PageAnimations } from '@/components/page-animations';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: 'Contact', path: '/contact', locale });
}

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});

async function submit(formData: FormData) {
  'use server';
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  if (!parsed.success) {
    log.warn('contact.invalid', { issues: parsed.error.issues });
    return;
  }
  log.info('contact.submitted', { email: parsed.data.email });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return (
    <>
      <PageAnimations />
      <article className="container mx-auto py-24 md:py-32 animate-page-content">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-primary font-medium">{t('title')}</h1>
          <div className="w-16 h-1 bg-accent rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
           <div className="flex flex-col gap-8 bg-secondary/20 p-8 rounded-2xl border border-border">
              <h2 className="font-serif text-2xl font-medium">Boutique Details</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Location</h4>
                  <p className="text-foreground">Sector 17, Near Neelam Theatre</p>
                  <p className="text-muted-foreground">Chandigarh, India</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Hours</h4>
                  <p className="text-foreground">10:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Open Daily</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Direct Contact</h4>
                  <p className="text-foreground font-serif text-2xl">+91 88473 63944</p>
                </div>
              </div>
           </div>

           <div>
            <form action={submit} className="grid gap-6 p-8 bg-card rounded-2xl border border-border shadow-sm">
              <h2 className="font-serif text-2xl font-medium mb-2">Send an Inquiry</h2>
              <div>
                <Input name="name" placeholder={t('name')} required className="h-12 bg-background" />
              </div>
              <div>
                <Input name="email" type="email" placeholder={t('email')} required className="h-12 bg-background" />
              </div>
              <div>
                <Textarea name="message" placeholder={t('message')} required rows={6} className="bg-background resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full font-semibold tracking-wide uppercase">{t('submit')}</Button>
            </form>
           </div>
        </div>
      </article>
    </>
  );
}
