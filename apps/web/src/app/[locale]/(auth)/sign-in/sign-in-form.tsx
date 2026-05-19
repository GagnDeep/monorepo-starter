'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { signIn, signUp } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export function SignInForm() {
  const t = useTranslations('signIn');
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: FormValues, mode: 'signin' | 'signup') {
    setPending(true);
    setError(null);
    try {
      const fn =
        mode === 'signin'
          ? signIn.email({ email: values.email, password: values.password })
          : signUp.email({
              email: values.email,
              password: values.password,
              name: values.email.split('@')[0]!,
            });
      const res = await fn;
      if (res.error) {
        setError(t('errors.invalid'));
      } else {
        window.location.href = '/';
      }
    } catch {
      setError(t('errors.unknown'));
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={form.handleSubmit((v) => onSubmit(v, 'signin'))}
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" type="email" autoComplete="email" {...form.register('email')} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">{t('password')}</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          {...form.register('password')}
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div className="flex flex-col gap-2">
        <Button type="submit" disabled={pending}>
          {t('submit')}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={pending}
          onClick={form.handleSubmit((v) => onSubmit(v, 'signup'))}
        >
          {t('register')}
        </Button>
      </div>
    </form>
  );
}
