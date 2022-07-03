import { 
    Actor, Task, Wait, Click, meetingsButton, 
    addMeetingButtonForMobile, previousMeetingTypeButton
} from '@index';

export class GoToCheckInSetupOnMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Click.on(meetingsButton),
            Click.on(addMeetingButtonForMobile),
            Click.on(previousMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToCheckInSetupOnMobile {
        return new GoToCheckInSetupOnMobile();
    }
}