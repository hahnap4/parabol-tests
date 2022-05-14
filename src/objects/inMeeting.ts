import { Locator, Page } from '@playwright/test';

export class inMeetingPage {
  readonly page: Page;

// General
  readonly tipsBtn: Locator;
  readonly tipsPopup: Locator;
  readonly closeTips: Locator;
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

// Retro
  readonly startMyReflectionField: Locator;
  readonly stopMyReflectionField: Locator;
  readonly continueMyReflectionField: Locator;

// Retro Mobile View
  readonly startMyReflectionMobile: Locator;
  readonly stopMyReflectionMobile: Locator;
  readonly continueMyReflectionMobile: Locator;
  readonly firstCircle: Locator;
  readonly secondCircle: Locator;
  readonly thirdCircle: Locator;

// Demo-Specific for Retro
  readonly startDemo: Locator;
  readonly endDemo: Locator;

// Check-In

constructor(page: Page) {
    this.page = page;

// General, including Meeting Discussion and Summary
    this.tipsPopup = page.locator('.css-1svc0d4');
    this.closeTips = page.locator('text=close');
    this.nextBtn = page.locator('.css-1ogh8i5 >> text=Next');

// Sprint Poker

// Retro
    this.startMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=0'); 
    this.stopMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=1'); 
    this.continueMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=3'); 

// Retro Mobile View
    this.startMyReflectionMobile = page.locator('.css-s1zofd >> nth=0'); 
    this.stopMyReflectionMobile = page.locator('.css-s1zofd >> nth=1'); 
    this.continueMyReflectionMobile = page.locator('.css-s1zofd >> nth=3');
    this.firstCircle = page.locator('.css-10xvyz0 >> nth=0');
    this.secondCircle = page.locator('.css-tj4b0m div:nth-child(2)');
    this.thirdCircle = page.locator('.css-tj4b0m div:nth-child(3)');

// Demo-Specific for Retro
    this.startDemo = page.locator('button:has-text("Start Demo")');
    this.endDemo = page.locator('.css-1ogh8i5 >> text=End Demo');

// Check-In

  }

}