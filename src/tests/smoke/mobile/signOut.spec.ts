import { test, expect } from '@playwright/test';
import { meetingHomePage } from '@index'

test.use({ storageState: 'storageState.json' });
test.describe('Mobile', () => {

    // User signs out on mobile.
    test('Sign Out', async({ page }) => {
        const homepage = new meetingHomePage(page);
        await page.goto('/');
        await homepage.signOut.click();
        await page.waitForLoadState('networkidle');
        await expect(page.url()).toContain('action.parabol.co');
    });
    
});
