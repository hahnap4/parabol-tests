import { Page } from '@playwright/test';

export class SubmitReflectionBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async PressingEnterKey() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForLoadState('load');
    }
}
