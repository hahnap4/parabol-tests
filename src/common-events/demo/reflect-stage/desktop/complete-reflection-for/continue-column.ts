import { continueField, thirdReflectionBox } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForContinueColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInContinueField() {
        this.page.click(continueField);
        this.page.fill(continueField, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForSelector(thirdReflectionBox);
    }
}
