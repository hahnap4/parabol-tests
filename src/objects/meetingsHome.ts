import { Locator, Page } from '@playwright/test';

export class meetingHomePage {
  readonly page: Page;

  // Header
  readonly hamburgerIcon: Locator;
  readonly ParabolLogo: Locator;
  readonly helpMenu: Locator;
  readonly notifBell: Locator;
  readonly userIcon: Locator;

  // User Profile
  readonly myProfile: Locator;
  readonly organizationList: Locator;
  readonly upgradeToPro: Locator;
  readonly signOut: Locator;

  // Side Nav
  readonly meetingsSide: Locator;
  readonly timelineSide: Locator;
  readonly tasksSide: Locator;
  readonly teamSide: Locator;
  readonly addTeamSide: Locator;

  // Meeting
  readonly addMeeting: Locator;
  readonly meetingBox: Locator;
  readonly meetingTripleDot: Locator;
  readonly copyInviteLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header
    this.hamburgerIcon = page.locator('button[aria-label="Toggle dashboard menu"]');
    this.ParabolLogo = page.locator('button >> .css-1tiimx7');
    this.helpMenu = page.locator('button[aria-label="Help menu"]');
    this.notifBell = page.locator('button[aria-label="Notifications"]');
    this.userIcon = page.locator('button >> .css-clypkz');

    // User Profile
    this.myProfile = page.locator('');
    this.organizationList = page.locator('');
    this.upgradeToPro = page.locator('');
    this.signOut = page.locator('');

    // Side Nav
    this.meetingsSide = page.locator('button:has-text("Meetings")');
    this.timelineSide = page.locator('button:has-text("Timeline")');
    this.tasksSide = page.locator('button:has-text("Tasks")');
    this.teamSide = page.locator('button >> .css-11nec0l');
    this.addTeamSide = page.locator('button:has-text("Add a Team")');

    // Meeting
    this.addMeeting = page.locator('button:has-text("Add Meeting")');
    this.meetingBox = page.locator('.css-17crg8a');
    this.meetingTripleDot = page.locator('button >> .css-u152qm');
    this.copyInviteLink = page.locator('aria-label=Edit the meeting >> text=Copy invite link');
  }
}