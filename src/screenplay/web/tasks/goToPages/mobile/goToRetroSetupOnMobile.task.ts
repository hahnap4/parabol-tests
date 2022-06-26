import { 
    Actor, Task, Wait, Navigate, Click, meetingsButton, addMeetingButton, 
    nextMeetingTypeButton
} from '@index';

export class GoToRetroSetupOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(meetingsButton),
            Click.on(addMeetingButton),
            Click.on(nextMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToRetroSetupOnMobile {
        return new GoToRetroSetupOnMobile();
    }
}