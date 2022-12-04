import { 
    timelineButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToTimelinePageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(timelineButton);
        this.page.waitForLoadState('networkidle');
    }
}