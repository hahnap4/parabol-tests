import { Locator, Page } from '@playwright/test';

export class meetingHomePage {
  readonly page: Page;

  // Header
  readonly hamburgerIcon: Locator;
  readonly ParabolLogo: Locator;
  readonly helpMenu: Locator;
  readonly notifBell: Locator;
  readonly userIcon: Locator;

  // Side Nav
  readonly meetingsSide: Locator;
  readonly timelineSide: Locator;
  readonly tasksSide: Locator;
  readonly teamSide: Locator;
  readonly addTeamSide: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header
    this.hamburgerIcon = page.locator('button[aria-label="Toggle dashboard menu"]');
    this.ParabolLogo = page.locator('button >> .css-1tiimx7');
    this.helpMenu = page.locator('button[aria-label="Help menu"]');
    this.notifBell = page.locator('button[aria-label="Notifications"]');
    this.userIcon = page.locator('button >> .css-clypkz');

    // Side Nav
    this.meetingsSide = page.locator('button:has-text("Meetings")');
    this.timelineSide = page.locator('button:has-text("Timeline")');
    this.tasksSide = page.locator('button:has-text("Tasks")');
    this.teamSide = page.locator('button >> .css-11nec0l');
    this.addTeamSide = page.locator('button:has-text("Add a Team")');

  }
}