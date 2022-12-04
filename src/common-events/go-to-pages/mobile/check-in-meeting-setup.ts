import { 
    meetingsButton, 
    addMeetingButtonForMobile, previousMeetingTypeButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToCheckInMeetingSetupPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(meetingsButton);
        this.page.click(addMeetingButtonForMobile);
        this.page.click(previousMeetingTypeButton);
        this.page.waitForLoadState('networkidle');
    }
}