import { Locator, Page } from '@playwright/test';

export class billingTabPage {
  readonly page: Page;

  readonly upgradeNowButton: Locator;

  readonly quoteBox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.upgradeNowButton = page.locator('button:has-text("Upgrade Now")');

    this.quoteBox = page.locator('.css-vksrgj');

}

}