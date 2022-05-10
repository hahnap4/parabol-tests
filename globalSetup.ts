import { FullConfig } from '@playwright/test';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

// TODO: Switch out prod url for staging when it's fixed.
// TODO: Remove test skip for auth when staging is fixed.

// Auth Log In
  const AuthPage = await browser.newPage();
  await AuthPage.goto('https://action.parabol.co/'); //https://action-staging.parabol.co/
  await AuthPage.fill('input[aria-label="Email"]', 'test@automate.com');
  await AuthPage.fill('input[aria-label="Password"]', 'password');
  await Promise.all([
    AuthPage.waitForNavigation({ url: 'https://action.parabol.co/meetings' }), //https://action-staging.parabol.co/meetings
    AuthPage.locator('text=EmailPasswordSign In >> button').click()
  ]);
  
// Save signed-in state to 'storageState.json'.
await AuthPage.context().storageState({ path: 'storageState.json' });

await browser.close();

}

export default globalSetup;