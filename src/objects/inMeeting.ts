import { Locator, Page } from '@playwright/test';

export class inMeetingPage {
  readonly page: Page;

// General
  readonly tipsBtn: Locator;
  readonly nextBtn: Locator;
  readonly endMeeting: Locator;
  readonly teamName: Locator;
  readonly parabolLogo: Locator;
  readonly meetingName: Locator;
  readonly addUserToTeamMeeting: Locator;

// Ice Breaker (Sprint Poker and Retro)
  readonly editIcebreaker: Locator;
  readonly getNewIcebreaker: Locator;

// After Meeting Ends (for all types of meetings)
  readonly seeMeetingDiscussion: Locator;
  readonly reviewMeetingSummary: Locator;

// Sprint Poker
  readonly 

// Retro

// Demo-Specific for Retro
  readonly startDemo: Locator;
  readonly endDemo: Locator;

// Check-In

constructor(page: Page) {
    this.page = page;

// General, including Meeting Discussion and Summary
    this.nextBtn = page.locator('.css-1ogh8i5 >> text=Next');

// Sprint Poker

// Retro

// Demo-Specific for Retro
    this.startDemo = page.locator('button:has-text("Start Demo")');
    this.endDemo = page.locator('.css-1ogh8i5 >> text=End Demo');

// Check-In

  }

}