import { expect, test } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { testUser } from './testData';

const url = 'http://localhost:8080/';

test.describe('User', async () => {
  test('should see the header', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    expect(registerPage.header).toBeVisible();
    expect(registerPage.subHeaderInfo).toBeVisible();
  });

  test('should be able to register with correct data', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(testUser);
    await registerPage.submit();
  });

  // test('should be able to register without filling the language field', async ({
  //   page,
  // }) => {
  //   const registerPage = new RegisterPage(page);
  //   await registerPage.goto(url);
  // });

  // test('should be able to register without filling the phone number field', async ({
  //   page,
  // }) => {
  //   const registerPage = new RegisterPage(page);
  //   await registerPage.goto('http://localhost:8080/');
  // });
});
