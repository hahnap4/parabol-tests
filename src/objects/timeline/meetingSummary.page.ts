import { Locator, Page } from '@playwright/test';

export class meetingSummaryPage {
  readonly page: Page;

  readonly sideBoxQuote: Locator;
  readonly daysAgo: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sideBoxQuote = page.locator('.css-122zgjr');
    this.daysAgo = page.locator('.css-12n9j71');
}


}