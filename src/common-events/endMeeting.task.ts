import { 
    Actor, Task, DoubleClick, endMeetingButton
} from '@index';

export class EndMeeting extends Task {

    public async performAs(actor:Actor): Promise<any> {

        return actor.attemptsTo(
            DoubleClick.on(endMeetingButton)
        );
}

    public static inApp(): EndMeeting {
        return new EndMeeting();
    }
}