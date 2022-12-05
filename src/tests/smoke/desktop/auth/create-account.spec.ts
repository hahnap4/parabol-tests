import { test, expect } from '@playwright/test';
import { CreateAccountBy } from '../../../../common-events/auth/create-account';
import { DeleteAccountBy } from '../../../../common-events/auth/delete-account';
import 'dotenv/config';

const BaseURL = process.env.BASE_URL;

test('Create Account', async({ page }) => {
    try{ 
        const createAccountBy = new CreateAccountBy(page);
        await createAccountBy.FillingOutFields();
        await createAccountBy.ClickingOnCreateAccountButton();
        
        expect(page.url()).toContain(`${BaseURL}/meetings`);
    } 
    
    finally{
        const deleteAccountBy = new DeleteAccountBy(page);
        await deleteAccountBy.GoingToMyProfilePage();
        await deleteAccountBy.FillingOutFields();
        await deleteAccountBy.ClickingOnDeleteAccountButton();

        await expect.soft(page.url()).toContain(`${BaseURL}/resources`);
    }
});
