import { startField } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForStartColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStartField() {
        await this.page.click(startField);
        await this.page.fill(startField, randomStatement);
    }

    async SubmittingReflection() {
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
    }
}