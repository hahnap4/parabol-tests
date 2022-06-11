import { Locator, Page } from '@playwright/test';

export class createAccountPage {
  afterEach(arg0: () => Promise<void>) {
      throw new Error('Method not implemented.');
  }
  readonly page: Page;

  readonly createAccountButton: Locator;
  readonly signUpGoogle: Locator;
  readonly signUpSSO: Locator;
  readonly privacyPolicy: Locator;
  readonly signInInstead: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.createAccountButton = page.locator('button:has-text("Create Free Account")');
    this.signUpGoogle = page.locator('button:has-text("Sign up with Google")');
    this.signUpSSO = page.locator('button:has-text("Sign up with SSO")');
    this.privacyPolicy = page.locator('text=Privacy Policy');
    this.signInInstead = page.locator('button:has-text("Sign In")');
  }

}

