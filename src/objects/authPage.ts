import { Locator, Page } from '@playwright/test';

export class authPage {
  readonly page: Page;

  // Login Fields
  readonly emailField: Locator;
  readonly passwordField: Locator;
  
  // Submit
  readonly signInButton: Locator;
  
  constructor(page: Page) {
    this.page = page;

    // Login Fields
    this.emailField = page.locator('input[aria-label="Email"]');
    this.passwordField = page.locator('input[aria-label="Password"]');
    this.signInButton = page.locator('button:has-text("Sign In")');
  }
}