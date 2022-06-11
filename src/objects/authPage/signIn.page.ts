import { Locator, Page } from '@playwright/test';

export class signInPage {
  afterEach(arg0: () => Promise<void>) {
      throw new Error('Method not implemented.');
  }
  readonly page: Page;

  readonly signInButton: Locator;
  readonly signInGoogle: Locator;
  readonly signInSSO: Locator;
  readonly forgotPassword: Locator;
  readonly createAccountInstead: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.signInButton = page.locator('text=EmailPasswordSign In >> button');
    this.signInGoogle = page.locator('button:has-text("Sign in with Google")');
    this.signInSSO = page.locator('button:has-text("Sign in with SSO")');
    this.forgotPassword = page.locator('button:has-text("Forgot your password?")');
    this.createAccountInstead = page.locator('button:has-text("Create Free Account")');
  }

}

