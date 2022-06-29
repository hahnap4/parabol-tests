import { 
    Actor, Task, Click, Navigate, activeMeetingBox, meetingName
} from '@index';
import '@playwright/test';

export class EnterRetroMeeting extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            Navigate.to('/meetings'),
            Click.on(activeMeetingBox)
        );
}

    public static inApp(): EnterRetroMeeting {
        return new EnterRetroMeeting();
    }
}