import { randomStatement } from '@data/test_data.json';
import { stopField } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { Page } from '@playwright/test';

export class CompleteReflectionForStopColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStopField() {
        await this.page.click(stopField);
        await this.page.fill(stopField, randomStatement);
    }

    async SubmittingReflection() {
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
    }
}