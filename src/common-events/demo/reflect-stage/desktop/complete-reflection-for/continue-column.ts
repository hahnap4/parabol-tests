import { continueField } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForContinueColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInContinueField() {
        await this.page.click(continueField);
        await this.page.fill(continueField, randomStatement);
    }

    async SubmittingReflection() {
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
    }
}
