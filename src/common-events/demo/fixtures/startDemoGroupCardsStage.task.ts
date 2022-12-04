import { 
    closeTipsButton, startDemoButton, 
    tipsPopupBox , nextTopicButton
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class StartDemoGroupCardsStageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async StartingTheDemo(): Promise<void> {
        this.page.goto(`${baseURL}/retrospective-demo/reflect`);
        this.page.click(startDemoButton);
        this.page.waitForLoadState('networkidle');
        this.page.waitForSelector(tipsPopupBox);
        this.page.click(closeTipsButton);
    }

    async SkippingTopic(): Promise<void> {
        this.page.dblclick(nextTopicButton);
    }
}