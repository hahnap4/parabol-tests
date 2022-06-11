import { Locator, Page } from '@playwright/test';

export class generalCreateMeetingPage {
  readonly page: Page;

  readonly learnMore: Locator;
  readonly startMeeting: Locator;
  readonly rightButton: Locator;
  readonly leftButton: Locator;
  readonly backPageButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.learnMore = page.locator('text=Learn More');
    this.startMeeting = page.locator('text=Start Meeting');
    this.rightButton = page.locator('.css-eq76j1 >> nth=2');
    this.leftButton = page.locator('.css-eq76j1 >> nth=1');
    this.backPageButton = page.locator('.css-eq76j1 >> nth=0');
  }

}

