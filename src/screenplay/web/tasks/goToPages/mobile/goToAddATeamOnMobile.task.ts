import { 
    Actor, Task, Wait, Navigate, Tap, removeSideNavOnMobile
} from '@index';

export class GoToAddATeamOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/newteam/1'),
            Tap.on(removeSideNavOnMobile),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToAddATeamOnMobile {
        return new GoToAddATeamOnMobile();
    }
}

    