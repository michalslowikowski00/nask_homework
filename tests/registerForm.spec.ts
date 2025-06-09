import { expect, test } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { testUser, url, invalidEmails, invalidPasswords } from './testData';
import { omit } from 'lodash';

test.describe('User', async () => {
  test('should be able to register with correct data', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(testUser);
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    await expect(
      page.getByRole('heading', { name: /John, dziękujemy/i })
    ).toBeVisible();
  });

  test('should be able to register without the language', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(omit(testUser, 'language'));
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    await expect(
      page.getByRole('heading', { name: /John, dziękujemy/i })
    ).toBeVisible();
  });

  test('should be able to register without phone number', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(omit(testUser, 'phone'));
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    await expect(
      page.getByRole('heading', { name: /John, dziękujemy/i })
    ).toBeVisible();
  });

  test('should not be able to register with empty email', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm({ ...testUser, email: '' });
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const errorText = page.getByText('Pole E-mail jest wymagane');
    await expect(errorText).toBeVisible();
  });

  test('should not be able to register with empty firstname', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm({ ...testUser, firstName: '' });
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const errorText = page.getByText('Pole Imię jest wymagane');

    await expect(errorText).toBeVisible();
  });

  test('should not be able to register with empty lastname', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm({ ...testUser, lastName: '' });
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const errorText = page.getByText('Pole Nazwisko jest wymagane');

    await expect(errorText).toBeVisible();
  });

  test('should not be able to register with empty birth date', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm({ ...testUser, birthDate: '' });
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const wrongEmailErrorText = page.getByText(
      'Pole Data urodzenia jest wymagane'
    );

    await expect(wrongEmailErrorText).toBeVisible();
  });

  test('should not be able to register with all required fields empty', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const firstNameError = page.getByText('Pole Imię jest wymagane');
    const lastNameError = page.getByText('Pole Nazwisko jest wymagane');
    const emailError = page.getByText('Pole E-mail jest wymagane');
    const passwordError = page.getByText('Pole password jest wymagane');
    const confirmPasswordError = page.getByText(
      'Pole Powtórz hasło jest wymagane'
    );
    const birthDateError = page.getByText('Pole Data urodzenia jest wymagane');

    await expect(firstNameError).toBeVisible();
    await expect(lastNameError).toBeVisible();
    await expect(emailError).toBeVisible();
    await expect(passwordError).toBeVisible();
    await expect(confirmPasswordError).toBeVisible();
    await expect(birthDateError).toBeVisible();
  });

  test('should not be able to register without accepting the politics', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm(testUser);
    await registerPage.submit();
    const errorText = page.getByText('To pole jest wymagane');

    await expect(errorText).toBeVisible();
  });
});

test.describe('Password validation', () => {
  for (const [password, expectedError] of Object.entries(invalidPasswords)) {
    test(`should show error for invalid password: "${password}"`, async ({
      page,
    }) => {
      const registerPage = new RegisterPage(page);
      await registerPage.goto(url);

      const userWithInvalidPassword = {
        ...testUser,
        password,
        confirmPassword: password,
      };

      await registerPage.fillForm(userWithInvalidPassword);
      await registerPage.termsCheckbox.click();
      await registerPage.submit();

      const errorLocator = page.getByText(expectedError);
      await expect(errorLocator).toBeVisible();
    });
  }

  test('should show the error for invalid password confirmation', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto(url);
    await registerPage.fillForm({ ...testUser, confirmPassword: 'wrongPass' });
    await registerPage.termsCheckbox.click();
    await registerPage.submit();
    const errorText = page.getByText('Hasła nie są jednakowe!');
    await expect(errorText).toBeVisible();
  });
});

test.describe('Email validation', () => {
  for (const email of invalidEmails) {
    test(`should show error for invalid email address: "${email}"`, async ({
      page,
    }) => {
      const registerPage = new RegisterPage(page);
      await registerPage.goto(url);

      await registerPage.fillForm({ ...testUser, email });
      await registerPage.termsCheckbox.click();
      await registerPage.submit();

      const errorText = page.getByText(
        'Pole E-mail musi być poprawnym adresem email'
      );
      await expect(errorText).toBeVisible();
    });
  }
});
