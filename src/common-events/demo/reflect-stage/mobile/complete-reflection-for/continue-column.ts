import { continueFieldForMobile } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForContinueColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInContinueField() {
        await this.page.click(continueFieldForMobile);
        await this.page.fill(continueFieldForMobile, randomStatement);
        await this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('load');
    }
}
