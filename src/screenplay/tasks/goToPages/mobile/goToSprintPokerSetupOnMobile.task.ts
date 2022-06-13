import { 
    Actor, Task, Wait, Navigate, Click, meetingsButton, addMeetingButton, 
} from '@index';

export class GoToSprintPokerSetupOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(meetingsButton),
            Click.on(addMeetingButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToSprintPokerSetupOnMobile {
        return new GoToSprintPokerSetupOnMobile();
    }
}