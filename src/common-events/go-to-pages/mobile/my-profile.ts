import { 
    profilePictureForMobile
} from '@index';
import { Page } from '@playwright/test';

export class GoToMyProfilPageOnMobileBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async NavigatingToIt() {
        await this.page.click(profilePictureForMobile);
        this.page.waitForLoadState('networkidle');
    }
}