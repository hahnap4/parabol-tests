import { 
    Actor, Task, Navigate, Wait, Click, addMeetingButton
} from '@index';

export class GoToSprintPokerMeetingCreationPage extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Click.on(addMeetingButton),
            Wait.forLoadState('networkidle')
        );
}

    public static toApp(): GoToSprintPokerMeetingCreationPage {{
        return new GoToSprintPokerMeetingCreationPage();
    }
}
}