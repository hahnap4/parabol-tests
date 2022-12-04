import { 
    goToFirstReflection
} from '@index';
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