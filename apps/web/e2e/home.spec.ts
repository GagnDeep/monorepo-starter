import { test, expect } from '@playwright/test';

test('homepage visual and functional checks', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Customised Suits & Exclusive Stitching for Women.');
  await expect(page.locator('footer')).toContainText('Mutiyar the Fashion Studio');
});
