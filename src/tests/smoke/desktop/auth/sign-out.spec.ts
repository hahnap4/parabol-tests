import { test, expect } from '@playwright/test';
import { LogoutBy } from '../../../../common-events/auth/logout-for/desktop';
import 'dotenv/config';

const base_url = process.env.BASE_URL;

test.use({ storageState: 'src/fixtures/storage-state/first-user.json'});

test('Sign Out', async({ page }) => {
   const logoutBy = new LogoutBy(page);
   await page.goto(`${base_url}/meetings`)
   await logoutBy.ClickingOnSignOutButton();

   await expect(page.url()).toContain(`${base_url}`);
});

