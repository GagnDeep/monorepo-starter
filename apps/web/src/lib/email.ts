import { env } from './env';
import { log } from './log';

export interface EmailOpts {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(opts: EmailOpts): Promise<void> {
  if (!env.RESEND_API_KEY) {
    log.info('email.send (dev — no RESEND_API_KEY, not actually sending)', { to: opts.to, subject: opts.subject });
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: opts.from ?? 'onboarding@resend.dev',
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    log.error('email.send failed', { status: res.status, body });
    throw new Error(`Email send failed: ${res.status}`);
  }
}
