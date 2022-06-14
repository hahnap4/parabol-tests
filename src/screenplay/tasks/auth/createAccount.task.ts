import { 
    Actor, Task, Wait, Navigate, Fill, DoubleClick, createAccountButton

} from '@index';

require('dotenv').config();

const tempUsername = process.env.CREATE_EMAIL;
const tempPassword = process.env.CREATE_PASSWORD;

export class CreateAccount extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/create-account'),
            // @ts-ignore
            Fill.in(emailField, tempUsername),
            // @ts-ignore
            Fill.in(passwordField, tempPassword),
            DoubleClick.on(createAccountButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static inApp(): CreateAccount {
        return new CreateAccount();
    }
}