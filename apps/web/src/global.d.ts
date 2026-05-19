import type messages from './messages/en.json';

// AGENT-NOTE: Augments next-intl with our message shape so t('home.title') etc.
// autocompletes and t('typo') errors at build. Don't narrow Locale here — Next's
// generated layout/page types require `params: Promise<{ locale: string }>`.
declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
  }
}
