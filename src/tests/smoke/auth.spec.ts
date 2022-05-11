import { test, expect } from '@playwright/test';
import { authPage } from '../../objects/authPage';
import faker from '@faker-js/faker';

// User creates an account via email and password.
test.describe.parallel('Account', () => {
    test.skip('Create', async({ page }) => {
        const AuthPage = new authPage(page);
        await AuthPage.gotoSignUpPage();
        await expect(page.url()).toContain('/create-account'); // extra check during dev
        await AuthPage.emailField.fill(faker.internet.email());
        await AuthPage.passwordField.fill(faker.internet.password());

        //TODO: Will update/edit once objects are all finalized. Need to check it headed as well.
    });
});

/* 
TODO: Finish the above create account test.
Write tests for Log in and Log out scenarios.

Requires: 
 - authPage objects
 - meetingsHome objects
 - userProfile objects
 - use storageState to immediately log in at the start of a test run
 - teardown fixture for deleting newly created account
*/
