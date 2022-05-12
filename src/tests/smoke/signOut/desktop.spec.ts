import { test, expect } from '@playwright/test';
import { meetingHomePage } from '../../objects/meetingsHome'

test.use({ storageState: 'storageState.json' });
test.describe('Desktop', () => {
    // User signs out.
    test('Sign Out', async({ page }) => {
        const homepage = new meetingHomePage(page);
        await homepage.userIcon.click();
        await homepage.signOut.click();
        await expect(page.url()).toBe('action.parabol.co');
    });
});
