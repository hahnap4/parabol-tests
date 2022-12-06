import { stopFieldForMobile } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForStopColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStopField() {
        await this.page.click(stopFieldForMobile);
        await this.page.fill(stopFieldForMobile, randomStatement);
        await this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('load');
    }
}
