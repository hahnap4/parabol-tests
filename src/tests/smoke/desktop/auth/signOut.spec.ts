import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index'
import { SignOut } from '@web/tasks/auth/signOut/desktop/signOut.task';
import { LogInAsUserOne } from '../../../../screenplay/web/tasks/auth/signIn/logInAsUserOne.task';

test('Sign Out', async({ page }) => {

const actor = Actor.named('Robert')
   .can(BrowseTheWeb.using(page));
   
await actor.attemptsTo(
   LogInAsUserOne.inApp(),
   SignOut.ofApp()
   );

await expect(page.url()).toContain('parabol.co');

});

