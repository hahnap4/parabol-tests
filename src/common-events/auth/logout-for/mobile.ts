
import { signOutForMobileButton } from '@pages/general/user-menu-dropdown';
import { Page } from '@playwright/test';

export class LogoutOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnSignOutButton() {
        await this.page.click(signOutForMobileButton);
        await this.page.waitForLoadState('networkidle');
    }
}