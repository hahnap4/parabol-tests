import { 
    endDemoButton
} from '@index';
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