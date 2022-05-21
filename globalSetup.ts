import { FullConfig } from '@playwright/test';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();

// Auth Log In
//  const AuthPage = await browser.newPage();
//  await AuthPage.goto('https://action-staging.parabol.co/'); 
//  await AuthPage.fill('input[aria-label="Email"]', '{{ secret.SECRET_EMAIL }}');
//  await AuthPage.fill('input[aria-label="Password"]', '{{ secret.SECRET_PASS }}');
//  await Promise.all([
//    AuthPage.waitForNavigation({ /*url: 'https://action.parabol-staging.co/meetings'*/ }), 
//    AuthPage.locator('text=EmailPasswordSign In >> button').click()
//  ]);
//  
//// Save signed-in state to 'storageState.json'.
//await AuthPage.context().storageState({ path: 'prodStorageState.json' });

await browser.close();

}

export default globalSetup;