import { Locator, Page } from '@playwright/test';

export class retroTemplatesPage {
  readonly page: Page;

  readonly addAnotherPrompt: Locator;
  readonly editPromptTitle: Locator;
  readonly removePrompt: Locator;
  readonly changePromptColor: Locator;
  readonly editPromptDescription: Locator;
  
  constructor(page: Page) {
    this.page = page;

  this.addAnotherPrompt = page.locator('text=Add another prompt');
  this.editPromptTitle = page.locator('.css-nbyj04 >> nth=0');
  this.removePrompt = page.locator('.css-1vafts8 >> nth=0');
  this.changePromptColor = page.locator('.css-62shka >> nth=0');
  this.editPromptDescription = page.locator('.css-1xz6x59 >> text=Description');
  }

}

