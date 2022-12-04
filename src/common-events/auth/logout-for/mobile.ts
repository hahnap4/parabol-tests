import { 
    signOutButton 
} from '@index';
import { Page } from '@playwright/test';

export class LogoutOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnSignOutButton() {
        await this.page.click(signOutButton);
        this.page.waitForLoadState('networkidle');
    }
}