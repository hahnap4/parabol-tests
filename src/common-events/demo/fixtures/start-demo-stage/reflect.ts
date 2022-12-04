
import { startDemoButton } from '@pages/in-meeting/demo/demo-specific';
import { tipsPopupBox, closeTipsButton } from '@pages/in-meeting/general/general-in-meeting';
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
        this.page.click(startDemoButton);
        this.page.waitForLoadState('networkidle');
        this.page.waitForSelector(tipsPopupBox);
        this.page.click(closeTipsButton);
    }
}