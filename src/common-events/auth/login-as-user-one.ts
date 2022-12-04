import { emailField, passwordField } from '@pages/auth/general-auth';
import { signInButton } from '@pages/auth/sign-in';
import { Page } from '@playwright/test';
import 'dotenv/config';

const username = process.env.SECRET_EMAIL;
const password = process.env.SECRET_PASSWORD;
const baseURL = process.env.BASE_URL;

export class LoginAsUserOneBy {
    
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingOutFields() {
        await this.page.goto(`${baseURL}`);
        this.page.fill(emailField, `${username}`);
        this.page.fill(passwordField, `${password}`);
    }

    async ClickingSignInButton() {
        await this.page.click(signInButton);
        this.page.waitForLoadState('networkidle');
    }
}
