import { userProfilePage, meetingHomePage } from "@index";
import { test, expect, Page } from '@playwright/test';
import faker from '@faker-js/faker';

export class teardownPage {

async deleteAccount() {
    test('Delete User Account', async({ page }) => {
        const userprofilepage = new userProfilePage(page);
        const homePage = new meetingHomePage(page);

        await homePage.userIcon.click();
        await homePage.myProfile.click();

        await userprofilepage.deleteAccount.click();
        await userprofilepage.reasonForDelete.fill(faker.internet.color());
        await userprofilepage.goodbyeForever.dblclick();
        
        await page.waitForLoadState('networkidle');
        await expect.soft(page.url()).toContain('/resources');
    });
}

}
    