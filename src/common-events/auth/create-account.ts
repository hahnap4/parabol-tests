import { 
    createAccountButton
} from '@index';
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
        // @ts-ignore
        this.page.fill(emailField, tempUsername);
        // @ts-ignore
        this.page.fill(passwordField, tempPassword);
    }

    async ClickingOnCreateAccountButton() {
        await this.page.dblclick(createAccountButton);
        this.page.waitForLoadState('networkidle');
    }
}
