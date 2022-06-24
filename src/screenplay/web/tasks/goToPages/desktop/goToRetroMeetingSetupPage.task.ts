import { 
    Actor, Task, Navigate, Wait, Click, addMeetingButton, nextMeetingTypeButton
} from '@index';

export class GoToRetroMeetingSetupPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Click.on(addMeetingButton),
            Click.on(nextMeetingTypeButton),
            Wait.forLoadState('networkidle')
        );
}

    public static onApp(): GoToRetroMeetingSetupPage {{
        return new GoToRetroMeetingSetupPage();
    }
}
}