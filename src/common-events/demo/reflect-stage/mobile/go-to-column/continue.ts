import { goToThirdReflection } from '@pages/in-meeting/retro/mobile-specific-reflect-stage';
import { Page } from '@playwright/test';

export class GoToContinueColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToTheThirdReflection() {
        this.page.click(goToThirdReflection);
    }
}