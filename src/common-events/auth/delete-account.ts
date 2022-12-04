import { userIconButton } from '@pages/general/header';
import { goToMyProfileButton } from '@pages/general/user-menu-dropdown';
import { deleteAccountButton, goodbyeForeverButton, reasonForDeletionField } from '@pages/user-profile/danger-zone';
import { reason } from '@data/test_data.json';
import { Page } from '@playwright/test';

export class DeleteAccountBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async GoingToMyProfilePage() {
        await this.page.click(userIconButton);
        this.page.click(goToMyProfileButton);
    }

    async FillingOutFields() {
        await this.page.click(deleteAccountButton);
        this.page.fill(reasonForDeletionField, reason);
    }

    async ClickingOnDeleteAccountButton() {
        await this.page.dblclick(goodbyeForeverButton);
        this.page.waitForLoadState('networkidle');
    }
}