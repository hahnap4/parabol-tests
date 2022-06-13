import { 
    Actor, Task, Wait, Navigate, Click, meetingsButton, 
    addMeetingButtonForMobile, previousMeetingTypeButton
} from '@index';

export class GoToCheckInSetuponMobile extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/'),
            Click.on(meetingsButton),
            Click.on(addMeetingButtonForMobile),
            Click.on(previousMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToCheckInSetuponMobile {
        return new GoToCheckInSetuponMobile();
    }
}