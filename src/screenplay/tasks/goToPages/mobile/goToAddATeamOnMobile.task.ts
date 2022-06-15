import { 
    Actor, Task, Wait, Navigate, Press, Click, hamburgerIconForMobile
} from '@index';

export class GoToAddATeamOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/newteam/1'),
            Click.on(hamburgerIconForMobile),
            Press.key('Enter'),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToAddATeamOnMobile {
        return new GoToAddATeamOnMobile();
    }
}

    