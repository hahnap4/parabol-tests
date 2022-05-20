import { Locator, Page } from '@playwright/test';

export class teamDashPage {
  readonly page: Page;

  readonly archivedTasks: Locator;

  constructor(page: Page) {
    this.page = page;

    this.archivedTasks = page.locator('[aria-label="Archived Tasks"]');

}

}