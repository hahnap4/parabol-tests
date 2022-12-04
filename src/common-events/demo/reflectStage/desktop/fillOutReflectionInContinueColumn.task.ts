import { 
    continueField, randomStatement,
    thirdReflectionBox
} from '@index';
import { Page } from '@playwright/test';

export class CompleteReflectionForContinueColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInContinueField(): Promise<void> {
        this.page.click(continueField);
        this.page.fill(continueField, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection(): Promise<void> {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForSelector(thirdReflectionBox);
    }
}
