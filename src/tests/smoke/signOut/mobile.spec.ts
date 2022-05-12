import { test, expect } from '@playwright/test';
import { meetingHomePage } from '../../../objects/meetingsHome'

test.use({ storageState: 'storageState.json' });
test.describe('Mobile', () => {
    // User signs out.
    test('Sign Out', async({ page }) => {
        const homepage = new meetingHomePage(page);
        await homepage.signOut.click();
        await expect(page.url()).toBe('action.parabol.co');
    });
});
