import { startFieldForMobile } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { randomStatement } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class CompleteReflectionForStartColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStartField() {
        await this.page.click(startFieldForMobile);
        await this.page.fill(startFieldForMobile, randomStatement);
        await this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
       await this.page.keyboard.press('Enter');
       await this.page.keyboard.press('Enter');
       await this.page.waitForLoadState('load');
    }
}
    