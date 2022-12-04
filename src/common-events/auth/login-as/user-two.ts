import { 
    emailField, passwordField, signInButton
} from '@index';
import { Page } from '@playwright/test';
import 'dotenv/config';

const usernameTwo = process.env.SECRET_SECOND_EMAIL;
const passwordTwo = process.env.SECRET_SECOND_PASSWORD;
const baseURL = process.env.BASE_URL;

export class LoginAsUserTwoBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingOutFields() {
        await this.page.goto(`${baseURL}`);
        // @ts-ignore
        this.page.fill(emailField, usernameTwo);
        // @ts-ignore
        this.page.fill(passwordField, passwordTwo);
    }

    async ClickingSignInButton() {
        await this.page.click(signInButton);
        this.page.waitForLoadState('networkidle');
    }
}