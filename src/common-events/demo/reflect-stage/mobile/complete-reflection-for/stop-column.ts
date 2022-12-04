import { 
    stopFieldForMobile, randomStatement
} from '@index';
import { Page } from '@playwright/test';

export class CompleteReflectionForStopColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStopField() {
        this.page.click(stopFieldForMobile);
        this.page.fill(stopFieldForMobile, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForLoadState('load');
    }
}
