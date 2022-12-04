import { 
    goToThirdReflection
} from '@index';
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