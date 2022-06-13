import { 
    Actor, Task, Navigate, Wait, Click, addMeetingButton, previousMeetingTypeButton
} from '@index';

export class GoToCheckInMeetingCreationPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Click.on(addMeetingButton),
            Click.on(previousMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToCheckInMeetingCreationPage {{
        return new GoToCheckInMeetingCreationPage();
    }
}
}