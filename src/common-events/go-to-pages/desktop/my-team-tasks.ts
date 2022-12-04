import { 
    myTeamTasksButton
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;

export class GoToMyTeamTasksPageBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.goto(`${baseURL}`);
        this.page.click(myTeamTasksButton);
        this.page.waitForLoadState('networkidle');
    }
}