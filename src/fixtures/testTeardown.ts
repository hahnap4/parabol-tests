import { userProfilePage } from "../objects/userProfile";
import { test, expect, Page } from '@playwright/test';
import faker from '@faker-js/faker';

export class teardownPage {

async deleteAccount() {
    test('Delete User Account', async({ page }) => {
        const userprofilepage = new userProfilePage(page);
        await page.goto('/me/profile');
        await userprofilepage.deleteAccount.click();
        await userprofilepage.reasonForDelete.fill(faker.internet.color());
        await userprofilepage.goodbyeForever.click();
        await expect(page.url()).toContain('/resources');
    });
}

}
    