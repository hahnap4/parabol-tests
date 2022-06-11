import { Locator, Page } from '@playwright/test';

export class existingOrgPage {
  readonly page: Page;

  readonly radioBtnForExistingOrg: Locator;
  readonly orgOption: Locator;
  readonly myOrgOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.radioBtnForExistingOrg = page.locator('.css-ohjobq >> text=an existing organization:');
    this.orgOption = page.locator('.css-914c56');
    this.myOrgOption = page.locator('role=menuitem >> .css-5w21bi');
  }

}

