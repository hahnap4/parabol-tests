import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb, SignIn } from '@index';

test('Sign In', async({ page }) => {
    
    const actor = Actor.named('Robert')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(SignIn.toApp());

    await expect(page.url()).toContain('/meetings');

});
