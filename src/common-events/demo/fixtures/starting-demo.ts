
import { startDemoButton } from '@pages/in-meeting/demo/demo-specific';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class StartDemoBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToURL() {
        await this.page.goto(`${baseURL}/retrospective-demo/reflect`);
        this.page.click(startDemoButton);
        this.page.waitForLoadState('networkidle');
    }
}