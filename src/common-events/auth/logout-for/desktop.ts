
import { userIconButton } from '@pages/general/header';
import { signOutButton } from '@pages/general/user-menu-dropdown';
import { Page } from '@playwright/test';

export class LogoutBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnSignOutButton() {
        await this.page.click(userIconButton);
        await this.page.click(signOutButton);
        await this.page.waitForLoadState('networkidle');
    }
}