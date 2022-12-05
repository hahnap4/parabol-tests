import { test, expect } from '@playwright/test';
import { LoginAsUserOneBy } from '../../../../common-events/auth/login-as-user-one';
import 'dotenv/config';

const BaseURL = process.env.BASE_URL;

test('Sign In', async ({ page }) => {
    const loginAsUserOneBy = new LoginAsUserOneBy(page);

    await loginAsUserOneBy.FillingOutFields();
    await loginAsUserOneBy.ClickingSignInButton();

    expect(page.url()).toContain(`${BaseURL}/meetings`);

});
