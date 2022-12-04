import { startField, firstReflectionBox } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForStartColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStartField() {
        this.page.click(startField);
        this.page.fill(startField, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForSelector(firstReflectionBox);
    }
}