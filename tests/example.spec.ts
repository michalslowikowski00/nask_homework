import { test, expect } from '@playwright/test';

const urlLocalHost = 'https://playwright.dev/';

test.describe('Website', async () => {
  test('should has title', async ({ page }) => {
    await page.goto(urlLocalHost);
    await expect(page).toHaveTitle(/Playwright/);
  });
});
