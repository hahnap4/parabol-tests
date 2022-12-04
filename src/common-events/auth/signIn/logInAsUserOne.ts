import { 
    emailField, passwordField,
    signInButton
} from '@index';
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

    async FillingOutFields(): Promise<void> {
        await this.page.goto(`${baseURL}`);
        // @ts-ignore
        this.page.fill(emailField, username);
        // @ts-ignore
        this.page.fill(passwordField, password);
    }

    async ClickingSignInButton(): Promise<void> {
        this.page.click(signInButton);
        this.page.waitForLoadState('networkidle');
    }
}
