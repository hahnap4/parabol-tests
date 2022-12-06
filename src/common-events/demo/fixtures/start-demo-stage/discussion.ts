
import { nextTopicButton } from '@pages/in-meeting/general/general-in-meeting';
import { Page } from '@playwright/test';

export class GoToDemoDiscussionStageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async SkippingTopics() {
        await this.page.dblclick(nextTopicButton);
        await this.page.dblclick(nextTopicButton);
        await this.page.dblclick(nextTopicButton);
    }
}