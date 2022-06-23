import { 
    Actor, Task, Wait, Navigate, Click, userIconButton, signOutButton 
} from '@index';
import { LogInAsUserOne } from '../../signIn/logInAsUserOne.task';

export class SignOut extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            LogInAsUserOne.inApp(),
            Click.on(userIconButton),
            Click.on(signOutButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static ofApp(): SignOut {
        return new SignOut();
    }
}
