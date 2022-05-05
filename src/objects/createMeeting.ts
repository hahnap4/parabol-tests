import { Locator, Page } from '@playwright/test';

export class createMeetingPage {
  readonly page: Page;

  // General
  readonly learnMore: Locator;
  readonly startMeeting: Locator;
  readonly rightButton: Locator;
  readonly leftButton: Locator;
  readonly backPageButton: Locator;

  // Settings for Meeting Creation
  readonly teamOptions: Locator;
  readonly myTeam: Locator;
  readonly templateEdit: Locator;
  readonly includeIcebreaker: Locator;

  // Templates
  
  constructor(page: Page) {
    this.page = page;

  // Settings for Meeting Creation

  // Templates

  }

}

