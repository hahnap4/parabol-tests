import { test, expect } from '@playwright/test';
import { LogoutOnMobileBy } from '../../../../common-events/auth/logout-for/mobile';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test.use({ storageState: './src/fixtures/storage-state/first-user.json'});

test('Sign Out', async({ page }) => {
   const logoutOnMobileBy = new LogoutOnMobileBy(page);
   await page.goto(`${base_url}/meetings`)
   await logoutOnMobileBy.ClickingOnSignOutButton();

   await expect(page.url()).toContain(base_url);
});
