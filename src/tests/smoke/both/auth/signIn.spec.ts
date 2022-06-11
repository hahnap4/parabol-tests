import { test, expect } from '@playwright/test';
import { signInPage, generalAuthPage } from '@index';

require('dotenv').config();

const username = process.env.SECRET_EMAIL;
const password = process.env.SECRET_PASSWORD;

test.describe('Account', () => {

    // User signs in.
    test('Sign In', async({ page }) => {
        const auth = new generalAuthPage(page);
        const signIn = new signInPage(page);
        await page.goto('/');
        await auth.emailField.fill(username);
        await auth.passwordField.fill(password);
        await signIn.signInButton.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('/meetings');
    });
});
