import { test, expect } from '@playwright/test';
import { authPage } from '../../../objects/authPage';
import faker from '@faker-js/faker';

// User creates an account via email and password.
test.describe.parallel('Account', () => {
    test('Create', async({ page }) => {
        const AuthPage = new authPage(page);
        await AuthPage.gotoSignUpPage();
        await expect(page.url()).toContain('/create-account'); // extra check during dev
        await AuthPage.emailField.fill(faker.internet.email());
        await AuthPage.passwordField.fill(faker.internet.password());

        //TODO: This is a sample test. 
        // Will update/edit once objects are all finalized. Need to check it headed as well.
    });
});

