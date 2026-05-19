#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

console.log('# Routes');
const pages = walk('apps/web/src/app').filter((p) => p.endsWith('page.tsx') || p.endsWith('route.tsx') || p.endsWith('route.ts'));
for (const p of pages) {
  const rel = p.replace('apps/web/src/app', '').replace(/\/(page|route)\.(tsx?|ts)$/, '') || '/';
  console.log('  ' + rel);
}

console.log('\n# Schema tables');
const schemaSrc = readFileSync('apps/web/src/db/schema.ts', 'utf8');
for (const m of schemaSrc.matchAll(/sqliteTable\(['"](\w+)['"]/g)) {
  console.log('  ' + m[1]);
}

console.log('\n# Locales');
const routingSrc = readFileSync('apps/web/src/i18n/routing.ts', 'utf8');
const locales = routingSrc.match(/locales:\s*\[([^\]]+)\]/)?.[1] ?? '';
console.log('  ' + locales.replace(/['"\s]/g, '').split(',').join(', '));

console.log('\n# Env vars (from lib/env.ts)');
try {
  const envSrc = readFileSync('apps/web/src/lib/env.ts', 'utf8');
  for (const m of envSrc.matchAll(/^\s*(\w+):\s*z\./gm)) {
    console.log('  ' + m[1]);
  }
} catch { console.log('  (lib/env.ts not found)'); }

console.log('\n# Packages');
const workspace = readFileSync('pnpm-workspace.yaml', 'utf8');
console.log(workspace.split('\n').filter((l) => l.trim().startsWith('-')).map((l) => '  ' + l.trim().slice(2)).join('\n'));
