import { 
    upgradeToProButtonForMobile
} from '@index';
import { Page } from '@playwright/test';

export class GoToOrgListPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(upgradeToProButtonForMobile);
        this.page.waitForLoadState('networkidle');
    }
}