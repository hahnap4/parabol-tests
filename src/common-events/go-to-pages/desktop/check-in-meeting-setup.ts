import { 
    addMeetingButton, previousMeetingTypeButton
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToCheckInMeetingSetupPageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}/meetings`);
        this.page.click(addMeetingButton);
        this.page.click(previousMeetingTypeButton)
        this.page.waitForLoadState('networkidle');
    }
}