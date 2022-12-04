import { FullConfig, /*chromium,*/ request } from '@playwright/test';
//import { emailField, passwordField, signInButton } from '@index';
import 'dotenv/config';

// Use multiple roles togather in a test: https://playwright.dev/docs/auth#testing-multiple-roles-together

const BaseURL = process.env.BASE_URL;
const firstUserEmail = process.env.SECRET_EMAIL;
const firstUserPassword = process.env.SECRET_PASSWORD;
const secondUserEmail = process.env.SECRET_SECOND_EMAIL;
const secondUserPassword = process.env.SECRET_SECOND_PASSWORD;

async function bothUsersSignIn(config: FullConfig) {
  config.projects[0].use;
  const firstRequestContext = await request.newContext();

  if(BaseURL === undefined) {
    return console.error('URL is undefined for first user.');
  }
  else {
    await firstRequestContext.post(BaseURL, {
      form: {
        // @ts-ignore
        'email': firstUserEmail,
        // @ts-ignore
        'password': firstUserPassword
  
      }
  });
  }

  await firstRequestContext.storageState({ path: './src/fixtures/storageState/firstUser.json'});

  await firstRequestContext.dispose();

  const secondRequestContext = await request.newContext();
  if(BaseURL === undefined) {
    return console.error('URL is undefined for the second user.');
  }
  else {
    await secondRequestContext.post(BaseURL, {
      form: {
        // @ts-ignore
        'email': secondUserEmail,
        // @ts-ignore
        'password': secondUserPassword
  
      }
  });
  }

  await secondRequestContext.storageState({ path: './src/fixtures/storageState/secondUser.json'});

  await secondRequestContext.dispose();

  // Auth Log In
  //const AuthPage = await browser.newPage();
  //await AuthPage.goto(`${BaseURL}`);
  //await AuthPage.fill(emailField, 'email@test.com');
  //await AuthPage.fill(passwordField, 'password');
  //await Promise.all([
  //  AuthPage.waitForNavigation({ url: `${BaseURL}/meetings` }),
  //  AuthPage.click(signInButton)
  //]);
  // Save signed-in state to 'storageState.json'.
  //await AuthPage.context().storageState({ path: 'savedAuthSession.json' });
  //
  //await browser.close();
}

export default bothUsersSignIn;