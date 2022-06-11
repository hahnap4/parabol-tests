import { Locator, Page } from '@playwright/test';

export class createTeamPage {
  readonly page: Page;

  readonly teamName: Locator;
  readonly createTeam: Locator;
  
  constructor(page: Page) {
    this.page = page;
    
    this.teamName = page.locator('.css-kxtm4u >> name=teamName');
    this.createTeam = page.locator('button:has-text("Create Team & Org")');

  }

}

