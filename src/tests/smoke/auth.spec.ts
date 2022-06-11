import { test, expect } from '@playwright/test';
import { authPage, teardownPage } from '@index';
import faker from '@faker-js/faker';

require('dotenv').config();

const username = process.env.SECRET_EMAIL;
const password = process.env.SECRET_PASSWORD;

test.describe('Account', () => {

    // TODO: When Staging is fixed, we should split "Create Account" tests into 2 different tests: mobile vs desktop.
    // TODO: Check if the teardown works as expected.

    // User creates an account via email and password.
    test.skip('Create', async({ page }) => {
        try{ 
            const AuthPage = new authPage(page);
            await AuthPage.gotoSignUpPage();
            await AuthPage.emailField.fill(faker.internet.email());
            await AuthPage.passwordField.fill(faker.internet.password());
            await AuthPage.createAccountButton.dblclick();
            await page.waitForLoadState('networkidle');
            await expect(page.url()).toContain('/meetings');
        } finally{
            const teardown = new teardownPage(); 
            await teardown.deleteAccount();
        }
    });
    
    // TODO: Decide what to do for the secrets. Once decision is made, then remove skip.
    // User signs in.
    test.only('Sign In', async({ page }) => {
        const AuthPage = new authPage(page);
        await page.goto('/');
        await AuthPage.emailField.fill(username);
        await AuthPage.passwordField.fill(password);
        await AuthPage.signInButton.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('/meetings');
    });
});
