import { Locator, Page } from '@playwright/test';

export class meetingHomePage {
  readonly page: Page;

  // Header
  readonly hamburgerIcon: Locator;
  readonly mobileHamburger: Locator;
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
  readonly mobileUpgrade: Locator;
  readonly meetingsSide: Locator;
  readonly timelineSide: Locator;
  readonly tasksSide: Locator;
  readonly teamSide: Locator;
  readonly addTeamSide: Locator;

  // Meeting
  readonly addMeeting: Locator;
  readonly mobileAddMeeting: Locator;
  readonly meetingBox: Locator;
  readonly meetingTripleDot: Locator;
  readonly copyInviteLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Header
    this.hamburgerIcon = page.locator('button[aria-label="Toggle dashboard menu"]');
    this.mobileHamburger = page.locator('button:has-text("menu")');
    this.ParabolLogo = page.locator('button >> .css-1tiimx7');
    this.helpMenu = page.locator('button[aria-label="Help menu"]');
    this.notifBell = page.locator('button[aria-label="Notifications"]');
    this.userIcon = page.locator('.css-h6h0jc');
    // User Profile
    this.myProfile = page.locator('.css-1gdkvb >> text=Profile');
    this.organizationList = page.locator('.css-1gdkvb >> text=Organizations');
    this.upgradeToPro = page.locator('.css-1gdkvb >> text=Upgrade to Pro');
    this.signOut = page.locator('.css-1gdkvb >> text=Sign Out');

    // Side Nav
    this.mobileUpgrade = page.locator('.css-c5lc87 >> text=Upgrade to Pro');
    this.meetingsSide = page.locator('button:has-text("Meetings")');
    this.timelineSide = page.locator('button:has-text("Timeline")');
    this.tasksSide = page.locator('button:has-text("Tasks")');
    this.teamSide = page.locator('.css-17o5cmy >> nth=3');
    this.addTeamSide = page.locator('button:has-text("Add a Team")');

    // Meeting
    this.addMeeting = page.locator('button:has-text("Add Meeting")');
    this.mobileAddMeeting = page.locator('.css-101c1r8')
    this.meetingBox = page.locator('.css-17crg8a');
    this.meetingTripleDot = page.locator('button >> .css-u152qm');
    this.copyInviteLink = page.locator('aria-label=Edit the meeting >> text=Copy invite link');
  }
}