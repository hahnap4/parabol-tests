import { FullConfig } from '@playwright/test';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

// Auth Log In
  const AuthPage = await browser.newPage();
  await AuthPage.goto('https://action.parabol.co/'); //https://action-staging.parabol.co/
  await AuthPage.fill('input[aria-label="Email"]', '${{ secrets.SECRET_EMAIL }}');
  await AuthPage.fill('input[aria-label="Password"]', '${{ secrets.SECRET_PASS }}');
  await Promise.all([
    AuthPage.waitForNavigation({ url: 'https://action.parabol.co/meetings' }), //https://action-staging.parabol.co/meetings
    AuthPage.locator('text=EmailPasswordSign In >> button').click()
  ]);
  
// Save signed-in state to 'storageState.json'.
await AuthPage.context().storageState({ path: 'storageState.json' });

await browser.close();

}

export default globalSetup;