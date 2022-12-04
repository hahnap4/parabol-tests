import { 
    nextTopicButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToDemoGroupCardsStageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async SkippingTopic() {
        await this.page.dblclick(nextTopicButton);
    }
}