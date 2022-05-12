import { Locator, Page } from '@playwright/test';

export class userProfilePage {
  readonly page: Page;

  readonly deleteAccount: Locator;
  readonly reasonForDelete: Locator;
  readonly goodbyeForever: Locator;

  constructor(page: Page) {
    this.page = page;

    this.deleteAccount = page.locator('text=Delete Account');
    this.reasonForDelete = page.locator('.css-1oswdzm');
    this.goodbyeForever = page.locator('button:has-text("Goodbye forever")');

}

}