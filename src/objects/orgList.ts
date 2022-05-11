import { Locator, Page } from '@playwright/test';

export class orgListPage {
  readonly page: Page;

  readonly upgradeToPro: Locator;

  constructor(page: Page) {
    this.page = page;

    this.upgradeToPro = page.locator('#main button:has-text("Upgrade to Pro")');

}

}