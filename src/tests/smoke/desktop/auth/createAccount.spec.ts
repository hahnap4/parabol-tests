import { test, expect } from '@playwright/test';
import { 
    createAccountPage, generalAuthPage, dangerZonePage, headerPage, userMenuDropdownPage, reason 
} from '@index';
import { faker } from '@faker-js/faker';

test.describe('Account', () => {

    // TODO: Create a mobile version of this test.

    // User creates an account via email and password.
    test('Create', async({ page }) => {
        try{ 
            const createAccount = new createAccountPage(page);
            const auth = new generalAuthPage(page);
            await auth.gotoSignUpPage();
            await auth.emailField.fill(faker.internet.email());
            await auth.passwordField.fill(faker.internet.password());
            await createAccount.createAccountButton.dblclick();
            await page.waitForLoadState('networkidle');
            await expect(page.url()).toContain('/meetings');
        } 
        
        finally{
            const dangerZone = new dangerZonePage(page);
            const header = new headerPage(page);
            const dropdown = new userMenuDropdownPage(page);

            await header.userIcon.click();
            await dropdown.myProfile.click();

            await dangerZone.deleteAccount.click();
            await dangerZone.reasonForDelete.fill(reason);
            await dangerZone.goodbyeForever.dblclick();

            await page.waitForLoadState('networkidle');
            await expect.soft(page.url()).toContain('/resources');
        }
    });
});
