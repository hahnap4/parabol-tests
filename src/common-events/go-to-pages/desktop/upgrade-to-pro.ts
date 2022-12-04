import { 
    upgradeToProButtonOnOrgList
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToUpgradeToProPageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}/me/organizations`);
        this.page.click(upgradeToProButtonOnOrgList);
        this.page.waitForLoadState('networkidle');
    }
}