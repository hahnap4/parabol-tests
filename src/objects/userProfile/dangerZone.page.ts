import { Locator, Page } from '@playwright/test';

export class dangerZonePage {
  readonly page: Page;

  readonly deleteAccount: Locator;
  readonly reasonForDelete: Locator;
  readonly goodbyeForever: Locator;

  constructor(page: Page) {
    this.page = page;

    this.deleteAccount = page.locator('[aria-label="Click to permanently delete your account."]');
    this.reasonForDelete = page.locator('textarea[name="reason"]');
    this.goodbyeForever = page.locator('button:has-text("Goodbye forever")');

}

}