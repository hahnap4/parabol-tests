import { 
    endMeetingButton
} from '@index';
import { Page } from '@playwright/test';

export class EndMeetingBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ClickingOnEndMeetingButton() {
        await this.page.dblclick(endMeetingButton);
    }
}