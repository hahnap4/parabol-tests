import { 
    Actor, Task, Wait, Navigate, Click, Fill, emailField, passwordField,
    signInButton
} from '@index';

require('dotenv').config();

const username = process.env.SECRET_EMAIL;
const password = process.env.SECRET_PASSWORD;

export class LogInAsUserOne extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            // @ts-ignore
            Fill.in(emailField, username),
            // @ts-ignore
            Fill.in(passwordField, password),
            Click.on(signInButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static inApp(): LogInAsUserOne {
        return new LogInAsUserOne();
    }
}
