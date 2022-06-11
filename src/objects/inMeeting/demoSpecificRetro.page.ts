import { Locator, Page } from '@playwright/test';

export class demoSpecificRetroPage {
  readonly page: Page;

  readonly startDemo: Locator;
  readonly endDemo: Locator;

constructor(page: Page) {
    this.page = page;

    this.startDemo = page.locator('button:has-text("Start Demo")');
    this.endDemo = page.locator('.css-1ogh8i5 >> text=End Demo');
  }

}