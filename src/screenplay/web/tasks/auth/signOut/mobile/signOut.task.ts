import { 
    Actor, Task, Wait, Navigate, Click, signOutButton 
} from '@index';

export class SignOutOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(signOutButton),
            Wait.forLoadState('networkidle'),
        );
}

    public static inApp(): SignOutOnMobile {
        return new SignOutOnMobile();
    }
}