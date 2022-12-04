import { 
    meetingsButton, addMeetingButton, 
} from '@index';
import { Page } from '@playwright/test';

export class GoToSprintPokerMeetingSetupPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(meetingsButton);
        this.page.click(addMeetingButton);
        this.page.waitForLoadState('networkidle');
    }
}