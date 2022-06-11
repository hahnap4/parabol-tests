import { Locator, Page } from '@playwright/test';

export class generalTemplatesPage {
  readonly page: Page;

  readonly publicTabTemplate: Locator;
  readonly orgTabTemplate: Locator;
  readonly teamTabTemplate: Locator;
  readonly createNewTemplate: Locator;
  readonly defaultChosenTemplate: Locator;
  readonly cloneEditTemplate: Locator;
  readonly useTemplate: Locator;
  readonly editTemplateTitle: Locator;
  readonly shareWithOrg: Locator;
  readonly shareWithWorld: Locator;
  readonly shareWithTeam: Locator;
  readonly deleteTemplate: Locator;
  
  constructor(page: Page) {
    this.page = page;

  this.publicTabTemplate = page.locator('.css-1n2mv2k >> text=Public');
  this.orgTabTemplate = page.locator('.css-1n2mv2k >> text=Organization');
  this.teamTabTemplate = page.locator('.css-1n2mv2k >> text=Team');
  this.createNewTemplate = page.locator('.css-rpo5i9 >> text=Create New Template');
  this.defaultChosenTemplate = page.locator('.css-4q37dp');
  this.cloneEditTemplate = page.locator('.css-lq5sxx');
  this.useTemplate = page.locator('.css-1w75b52 >> text=Use Template');
  this.editTemplateTitle = page.locator('.css-1wsccn1');
  this.shareWithOrg = page.locator('.css-165whb0 >> nth=0');
  this.shareWithWorld = page.locator('.css-165whb0 >> nth=1');
  this.shareWithTeam = page.locator('.css-kng4ce');
  this.deleteTemplate = page.locator('.css-1tcaq0x');
  }

}

