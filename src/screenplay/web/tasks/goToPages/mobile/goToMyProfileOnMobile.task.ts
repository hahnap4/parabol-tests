import { 
    Actor, Task, Wait, Navigate, removeSideNavOnMobile, Tap
} from '@index';

export class GoToMyProfileOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/me/profile'),
            Tap.on(removeSideNavOnMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyProfileOnMobile {
        return new GoToMyProfileOnMobile();
    }
}