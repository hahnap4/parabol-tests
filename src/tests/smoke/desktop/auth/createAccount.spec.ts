import { test, expect } from '@playwright/test';
import { CreateAccount } from 'src/common-events/auth/createAccount.task';
import { DeleteAccount } from 'src/common-events/auth/deleteAccount.task';

    // TODO: Create a mobile version of this test.

test('Create Account', async({ page }) => {
    try{ 
        await CreateAccount.inApp();
        
        expect(page.url()).toContain('/meetings');
    } 
    
    finally{
        await DeleteAccount.onApp();

        expect.soft(page.url()).toContain('/resources');
    }
});
