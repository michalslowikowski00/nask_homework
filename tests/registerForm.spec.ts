import { expect, test } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { testUser } from './testData';
import { omit } from 'lodash';

const url = 'http://localhost:8080/';

test.describe('User', async () => {
  test('should be able to register with correct data', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(testUser);
    const terms = page
      .locator('form div')
      .filter({ hasText: 'Akceptuję regulamin oraz' })
      .locator('div');
    await terms.click();
    registerPage.submit();
    await expect(
      page.getByRole('heading', { name: /John, dziękujemy/i })
    ).toBeVisible();
  });

  test('should be able to register without filling the language field', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(omit(testUser, 'language'));
    await registerPage.submit();
    // add assertion
  });

  test('should be able to register without filling the phone number field', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(omit(testUser, 'phone'));
    await registerPage.submit();
    // add assertion
  });
});
