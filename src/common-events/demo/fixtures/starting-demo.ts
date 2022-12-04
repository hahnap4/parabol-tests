import { 
    closeTipsButton, startDemoButton, 
    tipsPopupBox
} from '@index';
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
        this.page.waitForSelector(tipsPopupBox);
        this.page.click(closeTipsButton);
    }
}