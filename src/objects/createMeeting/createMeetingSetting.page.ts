import { Locator, Page } from '@playwright/test';

export class createMeetingSettingPage {
  readonly page: Page;

  readonly teamOptions: Locator;
  readonly myTeam: Locator;
  readonly templateEdit: Locator;
  readonly includeIcebreaker: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.teamOptions = page.locator('.css-ut2dbg');
    this.myTeam = page.locator('role=menuitem >> .css-1g1i81b');
    this.templateEdit = page.locator('.css-1hqp667');
    this.includeIcebreaker = page.locator('.css-1czpd32');
  }

}

