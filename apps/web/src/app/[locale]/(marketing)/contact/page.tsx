import { z } from 'zod';
import { getTranslations } from 'next-intl/server';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PageShell } from '@/components/page-shell';
import { buildMetadata } from '@/lib/seo';
import { log } from '@/lib/log';

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
    <PageShell title={t('title')} maxWidth="md">
      <p className="mb-6 text-muted-foreground">{t('description')}</p>
      <form action={submit} className="grid gap-4">
        <Input name="name" placeholder={t('name')} required />
        <Input name="email" type="email" placeholder={t('email')} required />
        <Textarea name="message" placeholder={t('message')} required rows={6} />
        <Button type="submit">{t('submit')}</Button>
      </form>
    </PageShell>
  );
}
