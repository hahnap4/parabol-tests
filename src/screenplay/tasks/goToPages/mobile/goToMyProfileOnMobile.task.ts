import { 
    Actor, Task, Wait, Navigate, Click, hamburgerIconForMobile, Press
} from '@index';

export class GoToMyProfileOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/profile'),
            Click.on(hamburgerIconForMobile),
            Press.key('Enter'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyProfileOnMobile {
        return new GoToMyProfileOnMobile();
    }
}