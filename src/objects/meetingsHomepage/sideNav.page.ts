import { Locator, Page } from '@playwright/test';

export class sideNavPage {
  readonly page: Page;

  readonly mobileUpgrade: Locator;
  readonly meetingsSide: Locator;
  readonly timelineSide: Locator;
  readonly tasksSide: Locator;
  readonly teamSide: Locator;
  readonly addTeamSide: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mobileUpgrade = page.locator('.css-c5lc87 >> text=Upgrade to Pro');
    this.meetingsSide = page.locator('button:has-text("Meetings")');
    this.timelineSide = page.locator('button:has-text("Timeline")');
    this.tasksSide = page.locator('button:has-text("Tasks")');
    this.teamSide = page.locator('.css-17o5cmy >> nth=3');
    this.addTeamSide = page.locator('button:has-text("Add a Team")');
  }
}