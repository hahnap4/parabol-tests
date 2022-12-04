import { test, expect } from '@playwright/test';
import { SignOutOnMobileBy } from '../../../../common-events/auth/logout-for/mobile';
import { LogInAsUserOneBy } from '../../../../common-events/auth/login-as/user-one';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test('Sign Out', async({ page }) => {

const actor = Actor.named('Robert')
   .can(BrowseTheWeb.using(page));
   
await actor.attemptsTo(
   LogInAsUserOne.inApp(),
   SignOutOnMobile.inApp()
   );

await expect(page.url()).toContain(base_url);
    
});
