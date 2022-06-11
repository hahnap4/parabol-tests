import { Locator, Page } from '@playwright/test';

export class generalAuthPage {
  afterEach(arg0: () => Promise<void>) {
      throw new Error('Method not implemented.');
  }
  readonly page: Page;

  readonly logoIcon: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.logoIcon = page.locator('.css-1hbr20g');
    this.emailField = page.locator('input[aria-label="Email"]');
    this.passwordField = page.locator('input[aria-label="Password"]');
  }
 
  async gotoSignUpPage() {
      await this.page.goto('/create-account');  
  }

  async gotoSignInPage() {
    await this.page.goto('/');
  }

}

