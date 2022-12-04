import { 
    meetingsButton, addMeetingButton, 
    nextMeetingTypeButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToRetroMeetingSetupPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(meetingsButton);
        this.page.click(addMeetingButton);
        this.page.click(nextMeetingTypeButton);
        this.page.waitForLoadState('networkidle');
    }
}