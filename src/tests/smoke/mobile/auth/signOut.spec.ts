import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index'
import { SignOutOnMobile } from '@web/tasks/auth/signOut/mobile/signOut.task';
import { LogInAsUserOne } from '@web/tasks/auth/signIn/logInAsUserOne.task';

require('dotenv').config();

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
