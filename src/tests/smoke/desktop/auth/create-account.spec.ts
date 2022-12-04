import { test, expect } from '@playwright/test';
import { CreateAccountBy } from '../../../../common-events/auth/create-account';
import { DeleteAccountBy } from '../../../../common-events/auth/delete-account';

    // TODO: Create a mobile version of this test.

test('Create Account', async({ page }) => {
    try{ 
        const createAccountBy = new CreateAccountBy(page);
        await createAccountBy.FillingOutFields();
        createAccountBy.ClickingOnCreateAccountButton();
        
        expect(page.url()).toContain('/meetings');
    } 
    
    finally{
        const deleteAccountBy = new DeleteAccountBy(page);
        await deleteAccountBy.GoingToMyProfilePage();
        deleteAccountBy.FillingOutFields();
        deleteAccountBy.ClickingOnDeleteAccountButton();

        expect.soft(page.url()).toContain('/resources');
    }
});
