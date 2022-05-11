import { test, expect } from '@playwright/test';
import { meetingHomePage } from '../../../objects/meetingsHome'

// TODO: Think about potentially setting up and tearing down fixtures for future tests in this file. 

// On Chrome

test.use({ storageState: 'storageState.json' });
test.describe.parallel('Current visual snapshot matches original snapshot', () => {

   test('For Meetings Homepage', async ({ page }) => {
     const homePage = new meetingHomePage(page);
     await page.goto('/meetings');
     expect(await page.screenshot()).toMatchSnapshot('meetingsHome.png');
   });

});