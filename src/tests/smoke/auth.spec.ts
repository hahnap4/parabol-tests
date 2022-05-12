import { test, expect } from '@playwright/test';
import { authPage } from '../../objects/authPage';
import { meetingHomePage } from '../../objects/meetingsHome'
import { userProfilePage } from '../../objects/userProfile'
import faker from '@faker-js/faker';

test.describe('Account', () => {

    // TODO: Remove skip when staging is fixed again.

    // User creates an account via email and password.
    test.skip('Create', async({ page }) => {
        try{ 
            const AuthPage = new authPage(page);
            await AuthPage.gotoSignUpPage();
            await AuthPage.emailField.fill(faker.internet.email());
            await AuthPage.passwordField.fill(faker.internet.password());
            await AuthPage.createAccountButton.click();
            await expect(page.url()).toContain('/meetings');
        } finally{
            const userprofilepage = new userProfilePage(page);
            await page.goto('/me/profile');
            await userprofilepage.deleteAccount.click();
            await userprofilepage.reasonForDelete.fill(faker.internet.color());
            await userprofilepage.goodbyeForever.click();
            await expect(page.url()).toContain('/resources');
        }
    });
    
    // User signs in.
    test('Sign In', async({ page }) => {
        const AuthPage = new authPage(page);
        await page.goto('/');
        await AuthPage.emailField.fill('test@automate.com');
        await AuthPage.passwordField.fill('password');
        await AuthPage.signInButton.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('/meetings');
    });
});
