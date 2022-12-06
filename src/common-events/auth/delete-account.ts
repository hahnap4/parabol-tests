import { userIconButton } from '@pages/general/header';
import { goToMySettingsButton } from '@pages/general/user-menu-dropdown';
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
        await this.page.click(goToMySettingsButton);
    }

    async FillingOutFields() {
        await this.page.click(deleteAccountButton);
        await this.page.fill(reasonForDeletionField, reason);
    }

    async ClickingOnDeleteAccountButton() {
        await this.page.dblclick(goodbyeForeverButton);
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(1000);
    }
}