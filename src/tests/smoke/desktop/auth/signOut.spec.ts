import { test, expect } from '@playwright/test';
import { SignOut, Actor, BrowseTheWeb } from '@index'

test.use({ storageState: 'prodStorageState.json' });

test('Sign Out', async({ page }) => {

const actor = Actor.named('Robert')
   .can(BrowseTheWeb.using(page));
   
await actor.attemptsTo(SignOut.ofApp());

await expect(page.url()).toContain('action.parabol.co');

});

