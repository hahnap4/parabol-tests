import { Locator, Page } from '@playwright/test';

export class generalInMeetingPage {
  readonly page: Page;

  readonly tipsPopup: Locator;
  readonly closeTips: Locator;
  readonly nextBtn: Locator;

constructor(page: Page) {
    this.page = page;

// General, including Meeting Discussion and Summary
    this.tipsPopup = page.locator('.css-1svc0d4');
    this.closeTips = page.locator('text=close');
    this.nextBtn = page.locator('.css-1ogh8i5 >> text=Next');
  }

}