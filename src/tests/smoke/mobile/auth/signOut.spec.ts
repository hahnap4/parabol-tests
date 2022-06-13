import { test, expect } from '@playwright/test';
import { SignOutOnMobile, Actor, BrowseTheWeb } from '@index'

test.use({ storageState: 'prodStorageState.json' });

test('Sign Out', async({ page }) => {

const actor = Actor.named('Robert')
   .can(BrowseTheWeb.using(page));
   
await actor.attemptsTo(SignOutOnMobile.inApp());

await expect(page.url()).toContain('action.parabol.co');
    
});
