import { 
    Actor, Task, Navigate, Wait, Click, addMeetingButton, nextMeetingTypeButton
} from '@index';

export class GoToRetroMeetingCreationPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Click.on(addMeetingButton),
            Click.on(nextMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToRetroMeetingCreationPage {{
        return new GoToRetroMeetingCreationPage();
    }
}
}