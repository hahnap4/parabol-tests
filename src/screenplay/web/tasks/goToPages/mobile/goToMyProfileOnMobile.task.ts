import { 
    Actor, Task, Wait, Navigate, Click, profilePictureForMobile
} from '@index';

export class GoToMyProfileOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(profilePictureForMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyProfileOnMobile {
        return new GoToMyProfileOnMobile();
    }
}