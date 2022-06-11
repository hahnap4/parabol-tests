import { Locator, Page } from '@playwright/test';

export class newOrgPage {
  readonly page: Page;

  readonly radioBtnForNewOrg: Locator;
  readonly newOrgName: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.radioBtnForNewOrg = page.locator('.css-ohjobq >> text=a new organization:');
    this.newOrgName = page.locator('.css-kxtm4u >> name=orgName');
  }

}

