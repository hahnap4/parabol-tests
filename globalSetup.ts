import { FullConfig } from '@playwright/test';
import { authPage } from './src/objects/authPage';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

  // Auth Log In
  const AuthPage = await browser.newPage();
  await AuthPage.goto('https://action-staging.parabol.co/');
  await AuthPage.fill('input[aria-label="Email"]', 'test@automate.com');
  await AuthPage.fill('input[aria-label="Password"]', 'password');
  await Promise.all([
    AuthPage.waitForNavigation(/*{ url: 'https://action-staging.parabol.co/meetings' }*/),
    AuthPage.locator('text=EmailPasswordSign In >> button').click()
  ]);

// Save signed-in state to 'storageState.json'.
await AuthPage.context().storageState({ path: 'storageState.json' });

await browser.close();
}

export default globalSetup;