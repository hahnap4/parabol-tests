import { 
    Actor, Task, Wait, Navigate, removeSideNavOnMobile, Click, Press, 
    addATeamButton
} from '@index';

export class GoToAddATeamOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(addATeamButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToAddATeamOnMobile {
        return new GoToAddATeamOnMobile();
    }
}

    