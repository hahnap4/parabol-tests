import { goToSecondReflection } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { Page } from '@playwright/test';

export class GoToStopColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToTheSecondReflection() {
        await this.page.click(goToSecondReflection);
    }
}