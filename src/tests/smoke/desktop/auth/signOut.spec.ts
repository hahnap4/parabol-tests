import { test, expect } from '@playwright/test';
import { meetingHomePage } from '@index'

test.use({ storageState: 'prodStorageState.json' });
test.describe('Desktop', () => {

    // User signs out on desktop.
    test('Sign Out', async({ page }) => {
        const homepage = new meetingHomePage(page);
        await page.goto('/');
        await homepage.userIcon.click();
        await homepage.signOut.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('action.parabol.co');
    });

});
