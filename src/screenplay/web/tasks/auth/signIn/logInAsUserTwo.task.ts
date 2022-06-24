import { 
    Actor, Task, Wait, Navigate, Click, Fill, emailField, passwordField,
    signInButton
} from '@index';

require('dotenv').config();

const usernameTwo = process.env.SECRET_SECOND_EMAIL;
const passwordTwo = process.env.SECRET_SECOND_PASSWORD;

export class LogInAsUserTwo extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            // @ts-ignore
            Fill.in(emailField, usernameTwo),
            // @ts-ignore
            Fill.in(passwordField, passwordTwo),
            Click.on(signInButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static inApp(): LogInAsUserTwo {
        return new LogInAsUserTwo();
    }
}
