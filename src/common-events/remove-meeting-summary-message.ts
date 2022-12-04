import { 
    tripleDotForMessage, archiveMeeting
} from '@index';
import { Page } from '@playwright/test';

export class RemoveMeetingSummaryMessageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async ArchivingIt() {
        await this.page.click(tripleDotForMessage);
        this.page.click(archiveMeeting);
    }
}