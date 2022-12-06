
import { closeDemoTipsButton, startDemoButton } from '@pages/in-meeting/demo/demo-specific';
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
        await this.page.click(startDemoButton);
        await this.page.waitForLoadState('networkidle');

        await this.page.waitForSelector('.css-altk3s >> nth=2');

        const visibleTips = await this.page.isVisible(closeDemoTipsButton);
        if (visibleTips === true) {
            await this.page.click(closeDemoTipsButton);
        }
    }
}