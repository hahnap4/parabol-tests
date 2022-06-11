import { Locator, Page } from '@playwright/test';

export class userMenuDropdownPage {
  readonly page: Page;

  readonly myProfile: Locator;
  readonly organizationList: Locator;
  readonly upgradeToPro: Locator;
  readonly signOut: Locator;

  constructor(page: Page) {
    this.page = page;

    this.myProfile = page.locator('.css-1gdkvb >> text=Profile');
    this.organizationList = page.locator('.css-1gdkvb >> text=Organizations');
    this.upgradeToPro = page.locator('.css-1gdkvb >> text=Upgrade to Pro');
    this.signOut = page.locator('text=Sign Out');
  }
}