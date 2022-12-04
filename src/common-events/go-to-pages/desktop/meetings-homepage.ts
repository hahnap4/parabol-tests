import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToMeetingsHomepageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}/meetings`);
        this.page.waitForLoadState('networkidle');
    }
}