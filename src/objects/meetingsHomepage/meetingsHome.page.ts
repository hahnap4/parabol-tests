import { Locator, Page } from '@playwright/test';

export class meetingsHomePage {
  readonly page: Page;

  readonly addMeeting: Locator;
  readonly mobileAddMeeting: Locator;
  readonly meetingBox: Locator;
  readonly meetingTripleDot: Locator;
  readonly copyInviteLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addMeeting = page.locator('button:has-text("Add Meeting")');
    this.mobileAddMeeting = page.locator('.css-101c1r8')
    this.meetingBox = page.locator('.css-17crg8a');
    this.meetingTripleDot = page.locator('button >> .css-u152qm');
    this.copyInviteLink = page.locator('aria-label=Edit the meeting >> text=Copy invite link');
  }
}