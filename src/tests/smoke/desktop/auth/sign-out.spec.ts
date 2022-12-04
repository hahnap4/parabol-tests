import { test, expect } from '@playwright/test';
import { SignOutBy } from '../../../../common-events/auth/logout-for/desktop';
import { LogInAsUserOneBy } from '../../../../common-events/auth/login-as/user-one';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test('Sign Out', async({ page }) => {

   await LogInAsUserOne.inApp();

   SignOut.ofApp();

   expect(page.url()).toContain(base_url);

});

