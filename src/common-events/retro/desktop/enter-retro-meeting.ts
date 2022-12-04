import { 
   activeMeetingBox
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class EnterRetroMeetingBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnAnActiveMeeting() {
        await this.page.goto(`${baseURL}/meetings`);
        this.page.click(activeMeetingBox);
    }
}
