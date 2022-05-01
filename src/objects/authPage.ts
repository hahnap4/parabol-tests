import { Locator, Page } from '@playwright/test';

export class authPage {
  readonly page: Page;

  // General
  readonly logoIcon: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;

  // Sign In Page
  readonly signInButton: Locator;
  readonly signInGoogle: Locator;
  readonly signInSSO: Locator;
  readonly forgotPassword: Locator;
  readonly createAccountInstead: Locator;

  // Create Account Page
  readonly createAccountButton: Locator;
  readonly signUpGoogle: Locator;
  readonly signUpSSO: Locator;
  readonly privacyPolicy: Locator;
  readonly signInInstead: Locator;
  
  constructor(page: Page) {
    this.page = page;

    // General
    this.logoIcon = page.locator('.css-1hbr20g');
    this.emailField = page.locator('input[aria-label="Email"]');
    this.passwordField = page.locator('input[aria-label="Password"]');

    // Sign In Page
    this.signInButton = page.locator('button:has-text("Sign In")');
    this.signInGoogle = page.locator('button:has-text("Sign in with Google")');
    this.signInSSO = page.locator('button:has-text("Sign in with SSO")');
    this.forgotPassword = page.locator('button:has-text("Forgot your password?")');
    this.createAccountInstead = page.locator('button:has-text("Create Free Account")');

    // Create Account Page
    this.createAccountButton = page.locator('button:has-text("Create Free Account")');
    this.signUpGoogle = page.locator('button:has-text("Sign up with Google")');
    this.signUpSSO = page.locator('button:has-text("Sign up with SSO")');
    this.privacyPolicy = page.locator('text=Privacy Policy');
    this.signInInstead = page.locator('button:has-text("Sign In")');
  }
 
  async gotoSignUpPage() {
      await this.page.goto('http://localhost:3000/create-account');  
  }

}

