import { 
    startFieldForMobile, randomStatement
} from '@index';
import { Page } from '@playwright/test';

export class CompleteReflectionForStartColumnOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStartField() {
        this.page.click(startFieldForMobile);
        this.page.fill(startFieldForMobile, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection() {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForLoadState('load');
    }
}
    