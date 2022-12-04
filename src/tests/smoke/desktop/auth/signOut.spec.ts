import { test, expect } from '@playwright/test';
import { SignOut } from 'src/common-events/auth/signOut/desktop/signOut.task';
import { LogInAsUserOne } from 'src/common-events/auth/signIn/logInAsUserOne';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test('Sign Out', async({ page }) => {

   await LogInAsUserOne.inApp();

   SignOut.ofApp();

   expect(page.url()).toContain(base_url);

});

