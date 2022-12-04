import { 
    myTeamTasksButton
} from '@index';
import { Page } from '@playwright/test';

export class GoToMyTeamTasksPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(myTeamTasksButton);
        this.page.waitForLoadState('networkidle');
    }
}