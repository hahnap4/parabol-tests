import { test, expect } from '@playwright/test';
import { headerPage, userMenuDropdownPage } from '@index'

test.use({ storageState: 'prodStorageState.json' });
test.describe('Desktop', () => {

    // User signs out on desktop.
    test('Sign Out', async({ page }) => {
        const header = new headerPage(page);
        const dropdown = new userMenuDropdownPage(page);
        await page.goto('/');
        await header.userIcon.click();
        await dropdown.signOut.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('action.parabol.co');
    });

});
