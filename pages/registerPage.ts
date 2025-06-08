import { Page, Locator } from '@playwright/test';
import { userDataType } from '../tests/testData';

export class RegisterPage {
  readonly page: Page;
  readonly header: Locator;
  readonly subHeaderInfo: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly birthDate: Locator;
  readonly languageSelect: Locator;
  readonly phone: Locator;
  readonly termsCheckbox: Locator;
  readonly marketingCheckbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h1', { hasText: 'Załóż konto' });
    this.subHeaderInfo = page.locator('p', {
      hasText: 'Uzupełnij pola poniżej',
    });
    this.firstName = page.locator('input[placeholder="Imię"]');
    this.lastName = page.locator('input[placeholder="Nazwisko"]');
    this.email = page.locator('input[placeholder="Twój adres e-mail"]');
    this.password = page.locator('input[placeholder="Hasło"]');
    this.confirmPassword = page.locator('input[placeholder="Powtórz hasło"]');
    this.birthDate = page.locator('input[placeholder="Data urodzenia"]');
    this.languageSelect = page.locator('select');
    this.phone = page.locator('input[placeholder="Numer telefonu"]');
    this.termsCheckbox = page.locator('text=Akceptuję regulamin');
    this.marketingCheckbox = page.locator('text=Wyrażam zgodę');
    this.submitButton = page.locator('button', { hasText: 'Zarejestruj' });
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async fillForm(data: userDataType) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.password.fill(data.password);
    await this.confirmPassword.fill(data.confirmPassword);
    await this.birthDate.fill(data.birthDate);

    if (data.language) {
      await this.languageSelect.selectOption(data.language);
    }

    if (data.phone) {
      await this.phone.fill(data.phone);
    }

    if (data.acceptTerms) {
      await this.termsCheckbox.click();
    }

    if (data.marketingOptIn) {
      await this.marketingCheckbox.check();
    }
  }

  async submit() {
    await this.submitButton.click();
  }
}
