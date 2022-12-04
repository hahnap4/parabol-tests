import { endDemoButton } from '@pages/in-meeting/demo/demo-specific';
import { Page } from '@playwright/test';

export class EndDemoRetroMeetingBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnEndDemoButton() {
        await this.page.dblclick(endDemoButton);
    }
}