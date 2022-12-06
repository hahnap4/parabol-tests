
import { closeDemoTipsButton, startDemoButton } from '@pages/in-meeting/demo/demo-specific';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToDemoReflectStageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async StartingDemo() {
        await this.page.goto(`${baseURL}/retrospective-demo/reflect`);
        await this.page.click(startDemoButton);
        await this.page.waitForLoadState('networkidle');

        const visibleTips = await this.page.isVisible(closeDemoTipsButton);
        if (visibleTips === true) {
            await this.page.click(closeDemoTipsButton);
        }
    }
}