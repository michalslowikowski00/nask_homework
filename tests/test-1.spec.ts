import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.locator('form div').filter({ hasText: 'Akceptuję regulamin oraz' }).locator('div').click();
  await page.getByRole('button', { name: 'Zarejestruj' }).click();
});