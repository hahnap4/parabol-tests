import { Locator, Page } from '@playwright/test';

export class retroPage {
  readonly page: Page;

  readonly startMyReflectionField: Locator;
  readonly stopMyReflectionField: Locator;
  readonly continueMyReflectionField: Locator;

constructor(page: Page) {
    this.page = page;

    this.startMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=0'); 
    this.stopMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=1'); 
    this.continueMyReflectionField = page.locator('[aria-label="Edit this reflection"] >> nth=3'); 
  }

}