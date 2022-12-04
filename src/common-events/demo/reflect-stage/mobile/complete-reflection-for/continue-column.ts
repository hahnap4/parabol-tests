import { 
    continueFieldForMobile, randomStatement
} from '@index';
import { Page } from '@playwright/test';

export class CompleteReflectionForContinueColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInContinueField() {
        this.page.click(continueFieldForMobile);
        this.page.fill(continueFieldForMobile, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForLoadState('load');
    }
}
