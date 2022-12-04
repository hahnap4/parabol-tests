import { test, expect } from '@playwright/test';
import { LogoutBy } from '../../../../common-events/auth/logout-for/desktop';
import { LoginAsUserOneBy } from '../../../../common-events/auth/login-as/user-one';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test('Sign Out', async({ page }) => {
   const loginAsUserOneBy = new LoginAsUserOneBy(page);
   await loginAsUserOneBy.FillingOutFields();
   loginAsUserOneBy.ClickingSignInButton();

   const logoutBy = new LogoutBy(page);
   await logoutBy.ClickingOnSignOutButton();

   expect(page.url()).toContain(base_url);

});

