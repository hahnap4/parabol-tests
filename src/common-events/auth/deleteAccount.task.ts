import { 
    userIconButton, 
    goToMyProfileButton, deleteAccountButton, reasonForDeletionField, 
    goodbyeForeverButton, reason
} from '@index';
import { Page } from '@playwright/test';

export class DeleteAccountBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToMyProfilePage(): Promise<void> {
        this.page.click(userIconButton);
        this.page.click(goToMyProfileButton);
    }

    async FillingOutFields(): Promise<void> {
        this.page.click(deleteAccountButton);
        this.page.fill(reasonForDeletionField, reason);
    }

    async ClickingOnDeleteAccountButton(): Promise<void> {
        this.page.dblclick(goodbyeForeverButton);
        this.page.waitForLoadState('networkidle');
    }
}