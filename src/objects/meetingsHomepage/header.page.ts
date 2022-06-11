import { Locator, Page } from '@playwright/test';

export class headerPage {
  readonly page: Page;

  readonly hamburgerIcon: Locator;
  readonly mobileHamburger: Locator;
  readonly ParabolLogo: Locator;
  readonly helpMenu: Locator;
  readonly notifBell: Locator;
  readonly userIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.hamburgerIcon = page.locator('button[aria-label="Toggle dashboard menu"]');
    this.mobileHamburger = page.locator('button:has-text("menu")');
    this.ParabolLogo = page.locator('button >> .css-1tiimx7');
    this.helpMenu = page.locator('button[aria-label="Help menu"]');
    this.notifBell = page.locator('button[aria-label="Notifications"]');
    this.userIcon = page.locator('text=help_outlinenotifications >> button >> nth=2');
  }
}