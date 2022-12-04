import { 
    goToSecondReflection
} from '@index';
import { Page } from '@playwright/test';

export class GoToStopColumnBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToTheSecondReflection() {
        this.page.click(goToSecondReflection);
    }
}