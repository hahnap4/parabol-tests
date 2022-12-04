import { FullConfig, chromium } from '@playwright/test';
import { emailField, passwordField, signInButton } from '@index';
import 'dotenv/config';

const BaseURL = process.env.BASE_URL;
const firstUserEmail = process.env.SECRET_EMAIL;
const firstUserPassword = process.env.SECRET_PASSWORD;
const secondUserEmail = process.env.SECRET_SECOND_EMAIL;
const secondUserPassword = process.env.SECRET_SECOND_PASSWORD;

async function bothUsersSignIn(_config: FullConfig) {
  const browser = await chromium.launch();

  const userOnePage = await browser.newPage();

  await userOnePage.goto(`${BaseURL}`);
  await userOnePage.fill(emailField, `${firstUserEmail}`);
  await userOnePage.fill(passwordField, `${firstUserPassword}`);
  await Promise.all([
    userOnePage.waitForNavigation({ url: `${BaseURL}/meetings` }),
    userOnePage.click(signInButton)
  ]);

  await userOnePage.context().storageState({ path: './src/fixtures/storage-state/first-user.json' });

  const userTwoPage = await browser.newPage();

  await userTwoPage.goto(`${BaseURL}`);
  await userTwoPage.fill(emailField, `${secondUserEmail}`);
  await userTwoPage.fill(passwordField, `${secondUserPassword}`);
  await userTwoPage.click(signInButton);
  
  await userTwoPage.context().storageState({ path: './src/fixtures/storage-state/second-user.json' });
      
  await browser.close();
}

export default bothUsersSignIn;