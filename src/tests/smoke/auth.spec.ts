import { test, expect, Page } from '@playwright/test';
import { authPage, teardownPage } from '@index';
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
            const teardown = new teardownPage(); // TODO: Check if this works once staging is working again.
            await teardown.deleteAccount();
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
