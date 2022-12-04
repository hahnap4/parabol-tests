import { 
    nextTopicButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToDemoDiscussionStageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async SkippingTopics() {
        await this.page.dblclick(nextTopicButton);
        this.page.dblclick(nextTopicButton);
        this.page.dblclick(nextTopicButton);
    }
}