import { goToFirstReflection } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { Page } from '@playwright/test';

export class GoToStartColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToTheFirstReflection() {
        this.page.click(goToFirstReflection);
    }
}