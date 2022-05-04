import { test, expect } from '@playwright/test';

// TODO: Think about potentially setting up and tearing down fixtures for future tests in this file. 

// Use `npx playwright test visualComparison --update-snapshots` to update the original snapshot.

test.use({ storageState: 'storageState.json' });
test.describe.parallel('Current visual snapshot matches original snapshot', () => {

   test('For Meetings Homepage', async ({ page }) => {
     await page.goto('/meetings');
     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });

});