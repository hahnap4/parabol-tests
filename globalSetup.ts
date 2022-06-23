// Uncomment if creating a new Login storageState.

/*import { FullConfig } from '@playwright/test';
import 'dotenv/config';

const { chromium } = require('@playwright/test');

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch()

  // Auth Log In

require('dotenv').config();

const username = process.env.SECRET_EMAIL;
const password = process.env.SECRET_PASSWORD;

const base_url = process.env.BASE_URL;

  const AuthPage = await browser.newPage();
  // @ts-ignore
  await AuthPage.goto(base_url); 
  await AuthPage.fill('input[aria-label="Email"]', username);
  await AuthPage.fill('input[aria-label="Password"]', password);
  await Promise.all([
    AuthPage.locator('text=EmailPasswordSign In >> button').click()
  ]);
  
// Save signed-in state to 'storageState.json'.
await AuthPage.context().storageState({ path: 'stagingStorageState.json' })
await browser.close();

}

export default globalSetup; */