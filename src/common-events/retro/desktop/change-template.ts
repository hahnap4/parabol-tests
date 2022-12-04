import { 
    selectAnotherTemplate, startStopContinueTemplate, 
    useTemplateButton,
} from '@index';
import { Page } from '@playwright/test';

export class ChangeTemplateBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async SelectingAnotherTemplate() {
        await this.page.click(selectAnotherTemplate);
        this.page.click(startStopContinueTemplate);
        this.page.click(useTemplateButton);
    }
}