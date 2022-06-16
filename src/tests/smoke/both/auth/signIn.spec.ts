import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';
import { SignIn } from '@web/tasks/auth/signIn.task';

test('Sign In', async({ page }) => {

    const actor = Actor.named('Robert')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(SignIn.toApp());

    expect(await page.url()).toContain('/meetings');

});
