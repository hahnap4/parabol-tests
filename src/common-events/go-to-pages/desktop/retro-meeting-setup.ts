import { 
    addMeetingButton, nextMeetingTypeButton
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToRetroMeetingSetupPageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}/meetings`);
        this.page.click(addMeetingButton);
        this.page.click(nextMeetingTypeButton);
        this.page.waitForLoadState('networkidle');
    }
}