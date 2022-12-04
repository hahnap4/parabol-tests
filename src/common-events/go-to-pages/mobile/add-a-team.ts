import {  
    addATeamButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToAddATeamPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(addATeamButton);
        this.page.waitForLoadState('networkidle');
    }
}
    