import { LogInAsUserOne } from 'src/common-events/auth/signIn/logInAsUserOne';
import { test, expect } from '@playwright/test';

test('Sign In', async({ page }) => {

    await LogInAsUserOne.inApp();

    expect(page.url()).toContain('/meetings');

});
