import { test, expect } from '@playwright/test';
import { Actor, BrowseTheWeb } from '@index';
import { CreateAccount } from '@web/tasks/auth/createAccount.task';
import { DeleteAccount } from '@web/tasks/auth/deleteAccount.task';

    // TODO: Create a mobile version of this test.

test.skip('Create Account', async({ page }) => {
    try{ 
        const actor = Actor.named('Robert')
            .can(BrowseTheWeb.using(page));

        await actor.attemptsTo(CreateAccount.inApp());
        
        await expect(page.url()).toContain('/meetings');
    } 
    
    finally{
        const actor = Actor.named('Robert')
            .can(BrowseTheWeb.using(page));

        await actor.attemptsTo(DeleteAccount.onApp());

        await expect.soft(page.url()).toContain('/resources');
    }
});
