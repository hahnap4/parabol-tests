import { myTasksButton } from '@index';
import { Page } from '@playwright/test';

export class GoToMyTasksPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(myTasksButton);
        this.page.waitForLoadState('networkidle');
    }
}