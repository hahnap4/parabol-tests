import { Locator, Page } from '@playwright/test';

export class upgradeToProPage {
  readonly page: Page;

  readonly upgradeNowBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.upgradeNowBtn = page.locator('button:has-text("Upgrade Now")');

}

}