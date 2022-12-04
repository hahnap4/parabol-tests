import { test, expect } from '@playwright/test';
import { SignOutOnMobile } from 'src/common-events/auth/logout-for/mobile/mobile';
import { LogInAsUserOne } from 'src/common-events/auth/login-as/user-one';
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
