import { randomStatement } from '@data/test_data.json';
import { stopField, secondReflectionBox } from '@pages/in-meeting/retro/desktop-specific-reflect-stage';
import { Page } from '@playwright/test';

export class CompleteReflectionForStopColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStopField() {
        this.page.click(stopField);
        this.page.fill(stopField, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForSelector(secondReflectionBox);
    }
}