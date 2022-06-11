import { Locator, Page } from '@playwright/test';

export class retroMobilePage {
  readonly page: Page;

  readonly startMyReflectionMobile: Locator;
  readonly stopMyReflectionMobile: Locator;
  readonly continueMyReflectionMobile: Locator;
  readonly firstCircle: Locator;
  readonly secondCircle: Locator;
  readonly thirdCircle: Locator;

constructor(page: Page) {
    this.page = page;

    this.startMyReflectionMobile = page.locator('.css-s1zofd >> nth=0'); 
    this.stopMyReflectionMobile = page.locator('.css-s1zofd >> nth=1'); 
    this.continueMyReflectionMobile = page.locator('.css-s1zofd >> nth=3');
    this.firstCircle = page.locator('.css-10xvyz0 >> nth=0');
    this.secondCircle = page.locator('.css-tj4b0m div:nth-child(2)');
    this.thirdCircle = page.locator('.css-tj4b0m div:nth-child(3)');
  }

}