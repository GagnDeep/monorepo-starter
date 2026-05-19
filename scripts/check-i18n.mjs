#!/usr/bin/env node
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'apps/web/src/messages';
const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
const load = (f) => JSON.parse(readFileSync(join(dir, f), 'utf8'));

function flatten(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) out.push(...flatten(v, key));
    else out.push(key);
  }
  return out;
}

const en = load('en.json');
const enKeys = new Set(flatten(en));

let missing = 0;
for (const f of files) {
  if (f === 'en.json') continue;
  const keys = new Set(flatten(load(f)));
  for (const k of enKeys) {
    if (!keys.has(k)) {
      console.error(`MISSING in ${f}: ${k}`);
      missing++;
    }
  }
}

if (missing > 0) {
  console.error(`\n✗ ${missing} missing translation key(s).`);
  process.exit(1);
}
console.log('✓ All locale files have parity with en.json');
