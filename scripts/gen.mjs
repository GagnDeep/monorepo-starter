#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const [, , cmd, ...args] = process.argv;

function write(path, contents) {
  if (existsSync(path)) { console.log('skip (exists):', path); return false; }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
  console.log('created:', path);
  return true;
}

function genPage(route) {
  if (!route || !route.startsWith('/')) route = '/' + (route ?? '');
  const slug = route.slice(1);
  if (!slug) { console.error('usage: gen page <route>'); process.exit(1); }
  const ns = slug.replace(/\//g, '_');
  const pagePath = `apps/web/src/app/[locale]/${slug}/page.tsx`;
  write(pagePath, `import { getTranslations } from 'next-intl/server';
import { PageShell } from '@/components/page-shell';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata({ title: '${ns}', path: '${route}', locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: '${ns}' });
  return (
    <PageShell title={t('title')}>
      <p>{t('description')}</p>
    </PageShell>
  );
}
`);
  // Add translation stubs
  const messagesDir = 'apps/web/src/messages';
  for (const f of readdirSync(messagesDir).filter((x) => x.endsWith('.json'))) {
    const p = join(messagesDir, f);
    const j = JSON.parse(readFileSync(p, 'utf8'));
    if (!j[ns]) {
      j[ns] = { title: ns, description: 'TODO: translate' };
      writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
      console.log('translation stub added:', p);
    }
  }
  // Add to sitemap ROUTES
  const sitemapPath = 'apps/web/src/app/sitemap.ts';
  let sitemap = readFileSync(sitemapPath, 'utf8');
  if (!sitemap.includes(`'${route}'`)) {
    sitemap = sitemap.replace(/(const ROUTES = \[[^\]]*)(\])/, (_m, a, b) => a.trimEnd().replace(/,$/, '') + `, '${route}'` + b);
    writeFileSync(sitemapPath, sitemap);
    console.log('sitemap updated');
  }
}

function genLocale(code, label) {
  if (!code || !label) { console.error('usage: gen locale <code> <label>'); process.exit(1); }
  const messagesDir = 'apps/web/src/messages';
  const target = join(messagesDir, `${code}.json`);
  if (!existsSync(target)) {
    const en = JSON.parse(readFileSync(join(messagesDir, 'en.json'), 'utf8'));
    writeFileSync(target, JSON.stringify(en, null, 2) + '\n');
    console.log('created locale file:', target);
  }
  // Add label to every locale file
  for (const f of readdirSync(messagesDir).filter((x) => x.endsWith('.json'))) {
    const p = join(messagesDir, f);
    const j = JSON.parse(readFileSync(p, 'utf8'));
    j.locale = j.locale ?? {};
    if (!j.locale[code]) {
      j.locale[code] = label;
      writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
    }
  }
  // Add code to routing.ts
  const routingPath = 'apps/web/src/i18n/routing.ts';
  let routing = readFileSync(routingPath, 'utf8');
  if (!routing.match(new RegExp(`['"]${code}['"]`))) {
    routing = routing.replace(/(locales:\s*\[)([^\]]+)(\])/, (_m, a, b, c) => a + b.trimEnd().replace(/,$/, '') + `, '${code}'` + c);
    writeFileSync(routingPath, routing);
    console.log('routing.ts updated');
  }
}

function genTable(name) {
  if (!name) { console.error('usage: gen table <name>'); process.exit(1); }
  const schemaPath = 'apps/web/src/db/schema.ts';
  let s = readFileSync(schemaPath, 'utf8');
  if (s.includes(`'${name}'`) || s.includes(`export const ${name} =`)) {
    console.log('skip (table exists):', name);
    return;
  }
  const stub = `\nexport const ${name} = sqliteTable('${name}', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql\`(unixepoch())\`),
});
`;
  // Insert before final schema export
  s = s.replace(/(export const schema = \{)([^}]+)(\};)/, (_m, a, b, c) => a + b.trimEnd() + `, ${name}` + ' ' + c);
  s = s.replace(/(export const schema = \{)/, stub + '$1');
  writeFileSync(schemaPath, s);
  console.log('added table to schema.ts:', name);
  console.log('\nNext: pnpm db:generate && pnpm db:migrate');
}

if (cmd === 'page') genPage(args[0]);
else if (cmd === 'locale') genLocale(args[0], args[1]);
else if (cmd === 'table') genTable(args[0]);
else {
  console.error('usage: gen <page|locale|table> ...args');
  process.exit(1);
}
