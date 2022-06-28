import { 
    Actor, Task, Wait, Navigate, Click, signOutButton 
} from '@index';
import { LogInAsUserOne } from '../../signIn/logInAsUserOne.task';

export class SignOutOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(signOutButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static inApp(): SignOutOnMobile {
        return new SignOutOnMobile();
    }
}