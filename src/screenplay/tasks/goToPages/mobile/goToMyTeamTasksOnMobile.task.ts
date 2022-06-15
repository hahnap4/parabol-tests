import { 
    Actor, Task, Wait, Navigate, Click, myTeamTasksButton
} from '@index';

export class GoToMyTeamTasksOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(myTeamTasksButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToMyTeamTasksOnMobile {
        return new GoToMyTeamTasksOnMobile();
    }
}
