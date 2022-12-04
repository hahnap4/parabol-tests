import { test, expect } from '@playwright/test';
import { LoginAsUserOneBy } from '../../../../common-events/auth/login-as/user-one';

test('Sign In', async ({ page }) => {
    const loginAsUserOneBy = new LoginAsUserOneBy(page);

    await loginAsUserOneBy.FillingOutFields();
    loginAsUserOneBy.ClickingSignInButton();

    expect(page.url()).toContain('/meetings');

});
