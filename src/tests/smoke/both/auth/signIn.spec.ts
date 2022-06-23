import { LogInAsUserOne } from '@web/tasks/auth/signIn/logInAsUserOne.task';
import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';

test('Sign In', async({ page }) => {

    const actor = Actor.named('Robert')
       .can(BrowseTheWeb.using(page));

    await actor.attemptsTo(LogInAsUserOne.inApp());

    await expect(page.url()).toContain('/meetings');

});
