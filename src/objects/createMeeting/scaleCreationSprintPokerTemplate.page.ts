import { Locator, Page } from '@playwright/test';

export class scaleCreationSprintPokerTemplatePage {
  readonly page: Page;

  readonly newScaleNameEdit: Locator;
  readonly addValueForScale: Locator;
  readonly editNewlyMadeScaleValue: Locator;
  readonly removeNewlyMadeScaleValue: Locator;
  readonly changeScaleValueColor: Locator;
  readonly backToNewTemplate: Locator;
  
  constructor(page: Page) {
    this.page = page;

  this.newScaleNameEdit = page.locator('.css-86tyml >> nth=0');
  this.addValueForScale = page.locator('.css-73ctvc >> text=Add value');
  this.editNewlyMadeScaleValue = page.locator('.css-86tyml >> nth=1');
  this.removeNewlyMadeScaleValue = page.locator('.css-hxsl57');
  this.changeScaleValueColor = page.locator('.css-1s9hg00 >> nth=0');
  this.backToNewTemplate = page.locator('button[aria-label="Back to Template"]');
  }

}

