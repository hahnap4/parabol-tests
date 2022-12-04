import { 
    upgradeToProButtonOnOrgList, 
    upgradeToProButtonForMobile
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToUpgradeToProPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}/me/organizations`);
        this.page.click(upgradeToProButtonForMobile);
        this.page.waitForSelector(upgradeToProButtonOnOrgList);
        this.page.click(upgradeToProButtonOnOrgList);
        this.page.waitForLoadState('networkidle');
    }
}