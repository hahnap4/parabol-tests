import { test, expect } from '@playwright/test';
import { CreateAccountBy } from '../../../../common-events/auth/create-account';
import { DeleteAccounBy } from '../../../../common-events/auth/delete-account';

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
