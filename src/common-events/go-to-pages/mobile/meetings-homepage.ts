import { 
    meetingsButton 
} from '@index';
import { Page } from '@playwright/test';

export class GoToMeetingsHomepageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(meetingsButton);
        this.page.waitForLoadState('networkidle');
    }
}