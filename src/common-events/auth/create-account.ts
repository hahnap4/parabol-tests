import { createAccountButton } from '@pages/auth/create-account';
import { emailField, passwordField } from '@pages/auth/general-auth';
import { Page } from '@playwright/test';
import 'dotenv/config';

const baseURL = process.env.BASE_URL;
const tempUsername = process.env.CREATE_EMAIL;
const tempPassword = process.env.CREATE_PASSWORD;

export class CreateAccountBy {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async FillingOutFields() {
        await this.page.goto(`${baseURL}/create-account`);
        this.page.fill(emailField, `${tempUsername}`);
        this.page.fill(passwordField, `${tempPassword}`);
    }

    async ClickingOnCreateAccountButton() {
        await this.page.dblclick(createAccountButton);
        this.page.waitForLoadState('networkidle');
    }
}
