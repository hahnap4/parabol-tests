import { 
    startField, randomStatement,
    firstReflectionBox
} from '@index';
import { Page } from '@playwright/test';

export class CompleteReflectionForStartColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingInStartField(): Promise<void> {
        this.page.click(startField);
        this.page.fill(startField, randomStatement);
        this.page.waitForLoadState('networkidle');
    }

    async SubmittingReflection(): Promise<void> {
        this.page.keyboard.press('Enter');
        this.page.keyboard.press('Enter');
        this.page.waitForSelector(firstReflectionBox);
    }
}