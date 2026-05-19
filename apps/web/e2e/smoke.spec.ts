import { test, expect } from '@playwright/test';

test('root redirects to /en and renders h1', async ({ page }) => {
  const res = await page.goto('/');
  expect(page.url()).toContain('/en');
  expect(res?.ok()).toBe(true);
  await expect(page.locator('h1').first()).toBeVisible();
});

test('sitemap is non-empty', async ({ request }) => {
  const res = await request.get('/sitemap.xml');
  expect(res.ok()).toBe(true);
  const body = await res.text();
  expect(body).toContain('<urlset');
  expect(body.length).toBeGreaterThan(100);
});
