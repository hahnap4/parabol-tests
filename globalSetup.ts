import { FullConfig } from '@playwright/test';
import { authPage } from './src/objects/authPage';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

  // Auth Log In
  const AuthPage = await browser.newPage();
  await AuthPage.goto('/');
  await AuthPage.fill('input[aria-label="Email"]', 'testing@test.com');
  await AuthPage.fill('input[aria-label="Password"]', 'password');
  await Promise.all([
    AuthPage.waitForNavigation({ url: 'http://localhost:3000/' }),
    AuthPage.click('button:has-text("Sign In")')
  ]);
// Save signed-in state to 'storageState.json'.
await AuthPage.context().storageState({ path: 'storageState.json' });

await browser.close();
}

export default globalSetup;