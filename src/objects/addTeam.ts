import { Locator, Page } from '@playwright/test';

export class addTeamPage {
  readonly page: Page;

  // Existing Organization
  readonly radioBtnForExistingOrg: Locator;
  readonly orgOption: Locator;
  readonly myOrgOption: Locator;

  // New Organization
  readonly radioBtnForNewOrg: Locator;
  readonly newOrgName: Locator;

  // General
  readonly teamName: Locator;
  readonly createTeam: Locator;
  
  constructor(page: Page) {
    this.page = page;

  // Existing Organization
    this.radioBtnForExistingOrg = page.locator('.css-ohjobq >> text=an existing organization:');
    this.orgOption = page.locator('.css-914c56');
    this.myOrgOption = page.locator('role=menuitem >> .css-5w21bi');

  // New Organization
    this.radioBtnForNewOrg = page.locator('.css-ohjobq >> text=a new organization:');
    this.newOrgName = page.locator('.css-kxtm4u >> name=orgName');

  // General
    this.teamName = page.locator('.css-kxtm4u >> name=teamName');
    this.createTeam = page.locator('button:has-text("Create Team & Org")');

  }

}

